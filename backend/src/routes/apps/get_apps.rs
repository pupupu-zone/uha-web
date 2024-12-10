use actix_web::{web, Error, HttpResponse};
use serde::Deserialize;
use serde_json::json;

use crate::models::applications::application::ApiApplication;
use crate::service::data_providers::WebDataPool;
use crate::utils::{acquire_pg_connection, get_session_user_id};

#[derive(Debug, Deserialize)]
pub struct AppsQuery {
    #[serde(default)]
    limit: Option<i32>,
}

impl AppsQuery {
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

        Ok(())
    }

    fn build_query(&self) -> String {
        let with_limit = self.limit.is_some();

        let mut query = String::from(
            r#"
            SELECT 
                id,
                user_id,
                category_id,
                name,
                logo_url,
                emoji,
                color,
                aliases,
                links,
                is_default,
                is_archived
            FROM
                applications
            WHERE
                (user_id = $1 OR is_default = TRUE)
                AND is_archived = FALSE
            "#,
        );

        // Add LIMIT clause if specified and not already added in subquery
        if with_limit {
            query.push_str("\nLIMIT $2");
        }

        query.push(';');
        query
    }
}

pub async fn get_apps(
    dp: web::Data<WebDataPool>,
    session: actix_session::Session,
    query: web::Query<AppsQuery>,
) -> Result<HttpResponse, Error> {
    // Validate query parameters
    query.validate()?;

    // Check user authorization
    let session_user_id = match get_session_user_id(&session).await {
        Ok(user_id) => user_id,
        Err(err) => {
            tracing::event!(target: "[GET APPS]", tracing::Level::ERROR, "{}", err);
            return Err(actix_web::error::ErrorUnauthorized(json!({
                "code": 9999, // 401 - Session expired, redirect to /logout
            })));
        }
    };

    let mut pg_connection = acquire_pg_connection(&dp).await?;

    // Build query
    let query_string = query.build_query();
    let mut db_query = sqlx::query(&query_string).bind(&session_user_id);

    // Add limit parameter if specified
    if let Some(limit) = query.limit {
        db_query = db_query.bind(limit);
    }

    // Execute built query
    let apps = match db_query.fetch_all(&mut *pg_connection).await {
        Ok(rows) => rows
            .iter()
            .map(ApiApplication::from_row)
            .collect::<Vec<ApiApplication>>(),
        Err(err) => {
            tracing::event!(target: "[GET APPS]", tracing::Level::ERROR, "{}", err);

            return Err(actix_web::error::ErrorInternalServerError(json!({
                "code": 10000, // 500 - Empty
            })));
        }
    };

    // Renew session
    session.renew();

    Ok(HttpResponse::Ok().json(apps))
}
