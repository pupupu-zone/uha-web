use actix_web::{web, Error, HttpResponse};
use serde::Deserialize;
use serde_json::json;

use crate::models::payment_methods::ApiPaymentMethod;
use crate::service::data_providers::WebDataPool;
use crate::utils::{acquire_pg_connection, get_session_user_id};

#[derive(Debug, Deserialize)]
pub struct PaymentMethodsQuery {
    #[serde(default)]
    limit: Option<i32>,
    #[serde(default)]
    order: Option<String>,
    #[serde(default)]
    random: Option<bool>,
}

impl PaymentMethodsQuery {
    fn validate(&self) -> Result<(), actix_web::error::Error> {
        // Validate limit if provided
        if let Some(limit) = self.limit {
            if limit < 1 {
                return Err(actix_web::error::ErrorBadRequest(json!({
                    "code": 1014, // Invalid limit parameter
                    "message": "Limit must be greater than 0"
                })));
            }
        }

        // Validate order if provided
        if let Some(ref order) = self.order {
            if order != "asc" && order != "desc" {
                return Err(actix_web::error::ErrorBadRequest(json!({
                    "code": 1015, // Invalid order parameter
                    "message": "Order must be either 'asc' or 'desc'"
                })));
            }
        }

        Ok(())
    }

    fn build_query(&self) -> String {
        let mut query = String::from(
            r#"
            SELECT 
                id,
                user_id,
                name,
                color,
                comment,
                emoji,
                is_default,
                is_archived
            FROM"#,
        );

        // If random is true and limit is set, use a subquery with RANDOM()
        if self.random.unwrap_or(false) && self.limit.is_some() {
            query.push_str(
                r#" (
                SELECT * FROM payment_methods
                WHERE (user_id = $1 OR is_default = TRUE)
                AND is_archived = FALSE
                ORDER BY RANDOM()
                LIMIT $2
            ) subquery"#,
            );
        } else {
            query.push_str(
                r#" payment_methods
            WHERE (user_id = $1 OR is_default = TRUE)
            AND is_archived = FALSE"#,
            );
        }

        // Add ORDER BY clause if not using RANDOM() or if using RANDOM() with additional ordering
        if !self.random.unwrap_or(false) || self.limit.is_some() {
            query.push_str("\nORDER BY name ");
            query.push_str(match self.order.as_deref() {
                Some("desc") => "DESC",
                _ => "ASC",
            });
        }

        // Add LIMIT clause if specified and not already added in subquery
        if self.limit.is_some() && !self.random.unwrap_or(false) {
            query.push_str("\nLIMIT $2");
        }

        query.push(';');
        query
    }
}

pub async fn get_payments(
    dp: web::Data<WebDataPool>,
    session: actix_session::Session,
    query: web::Query<PaymentMethodsQuery>,
) -> Result<HttpResponse, Error> {
    // Validate query parameters
    query.validate()?;

    // Check user authorization
    let session_user_id = match get_session_user_id(&session).await {
        Ok(user_id) => user_id,
        Err(err) => {
            tracing::event!(target: "[GET PAYMENT METHODS]", tracing::Level::ERROR, "{}", err);
            return Err(actix_web::error::ErrorUnauthorized(json!({
                "code": 9999, // 401 - Session expired, redirect to /logout
            })));
        }
    };

    let mut pg_connection = acquire_pg_connection(&dp).await?;

    // Build and execute query
    let query_string = query.build_query();
    let mut db_query = sqlx::query(&query_string).bind(&session_user_id);

    // Add limit parameter if specified
    if let Some(limit) = query.limit {
        db_query = db_query.bind(limit);
    }

    let payment_methods = match db_query.fetch_all(&mut *pg_connection).await {
        Ok(rows) => rows
            .iter()
            .map(ApiPaymentMethod::from_row)
            .collect::<Vec<ApiPaymentMethod>>(),
        Err(err) => {
            tracing::event!(target: "[GET PAYMENT METHODS]", tracing::Level::ERROR, "{}", err);
            return Err(actix_web::error::ErrorInternalServerError(json!({
                "code": 10000, // 500 - Empty
            })));
        }
    };

    Ok(HttpResponse::Ok().json(payment_methods))
}
