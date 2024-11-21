use actix_web::{web, Error, HttpResponse};
use serde_json::json;

use crate::models::categories::category::Category;
use crate::service::data_providers::WebDataPool;
use crate::utils::{acquire_pg_connection, get_session_user_id};

pub async fn get_categories_preview(
    dp: web::Data<WebDataPool>,
    session: actix_session::Session,
) -> Result<HttpResponse, Error> {
    let session_user_id = match get_session_user_id(&session).await {
        Ok(user_id) => user_id,
        Err(err) => {
            tracing::event!(target: "[GET CATEGORIES PREVIEW]", tracing::Level::ERROR, "{}", err);
            return Err(actix_web::error::ErrorUnauthorized(json!({
                "code": 9999,
            })));
        }
    };

    let mut pg_connection = acquire_pg_connection(&dp).await?;

    let categories = match sqlx::query(
        r#"
        SELECT 
            id,
            user_id,
            name,
            emoji,
            color,
            is_default
        FROM (
            SELECT * FROM categories 
            WHERE user_id = $1 OR is_default = TRUE
            ORDER BY RANDOM()
            LIMIT 6
        ) subquery
        ORDER BY name ASC;
        "#,
    )
    .bind(&session_user_id)
    .fetch_all(&mut *pg_connection)
    .await
    {
        Ok(rows) => rows
            .iter()
            .map(Category::from_row)
            .collect::<Vec<Category>>(),
        Err(err) => {
            tracing::event!(target: "[GET CATEGORIES PREVIEW]", tracing::Level::ERROR, "{}", err);
            return Err(actix_web::error::ErrorInternalServerError(json!({
                "code": 10000,
            })));
        }
    };

    session.renew();
    Ok(HttpResponse::Ok().json(categories))
}
