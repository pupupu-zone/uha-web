use actix_web::{web, Error, HttpResponse};
use serde::{Deserialize, Serialize};
use serde_json::json;

use crate::models::categories::category::Category;
use crate::service::data_providers::WebDataPool;
use crate::utils::{acquire_pg_connection, get_session_user_id};

#[derive(Debug, Deserialize)]
pub struct CategoriesQuery {
    #[serde(default)]
    limit: Option<i32>,
    #[serde(default)]
    order: Option<String>,
    #[serde(default)]
    random: Option<bool>,
}

impl CategoriesQuery {
    fn validate(&self) -> Result<(), actix_web::error::Error> {
        // Validate limit if provided
        if let Some(limit) = self.limit {
            if limit < 1 {
                return Err(actix_web::error::ErrorBadRequest(json!({
                    "code": 1014, // 400 - Invalid limit parameter
                    "message": "Limit must be greater than 0"
                })));
            }
        }

        // Validate order if provided
        if let Some(ref order) = self.order {
            if order != "asc" && order != "desc" {
                return Err(actix_web::error::ErrorBadRequest(json!({
                    "code": 1015, // 400 - Invalid order parameter
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
                emoji,
                color,
                is_default
            FROM"#,
        );

        // If random is true and limit is set, use a subquery with RANDOM()
        if self.random.unwrap_or(false) && self.limit.is_some() {
            query.push_str(
                r#" (
                    SELECT * FROM categories 
                    WHERE user_id = $1 OR is_default = TRUE
                    ORDER BY RANDOM()
                    LIMIT $2
                ) subquery"#,
            );
        } else {
            query.push_str(r#"categories WHERE user_id = $1 OR is_default = TRUE"#);
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

pub async fn get_categories(
    dp: web::Data<WebDataPool>,
    session: actix_session::Session,
    query: web::Query<CategoriesQuery>,
) -> Result<HttpResponse, Error> {
    // Validate query parameters
    query.validate()?;

    // Check user authorization
    let session_user_id = match get_session_user_id(&session).await {
        Ok(user_id) => user_id,
        Err(err) => {
            tracing::event!(target: "[GET CATEGORIES]", tracing::Level::ERROR, "{}", err);
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

    let categories = match db_query.fetch_all(&mut *pg_connection).await {
        Ok(rows) => rows
            .iter()
            .map(Category::from_row)
            .collect::<Vec<Category>>(),
        Err(err) => {
            tracing::event!(target: "[GET CATEGORIES]", tracing::Level::ERROR, "{}", err);
            return Err(actix_web::error::ErrorInternalServerError(json!({
                "code": 10000, // 500 - Empty
            })));
        }
    };

    // Renew session
    session.renew();

    Ok(HttpResponse::Ok().json(categories))
}
