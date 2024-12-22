use actix_web::{web, Error, HttpResponse};
use serde_json::json;

use crate::models::subscriptions::ApiSubscription;
use crate::service::data_providers::WebDataPool;
use crate::utils::{acquire_pg_connection, get_session_user_id};

// @TODO: Add pagination by dates
pub async fn get_subscriptions(
    dp: web::Data<WebDataPool>,
    session: actix_session::Session,
) -> Result<HttpResponse, Error> {
    /*
     * Check user authorization & get user's ID
     */
    let session_user_id = match get_session_user_id(&session).await {
        Ok(user_id) => user_id,
        Err(err) => {
            tracing::event!(target: "[GET SUBSCRIPTIONS]", tracing::Level::ERROR, "{}", err);
            return Err(actix_web::error::ErrorUnauthorized(json!({
                "code": 9999, // 401 - Session expired, redirect to /logout
            })));
        }
    };

    let mut pg_connection = acquire_pg_connection(&dp).await?;

    let subscriptions = match sqlx::query(
        r#"
        SELECT 
            id,
            user_id,
            app_id,
            payment_method_id,
            category_id,
            interval_value,
            interval_type,
            price,
            currency,
            first_payment,
            next_payment
        FROM
            subscriptions
        WHERE
            user_id = $1
        ORDER BY
            next_payment ASC;
        "#,
    )
    .bind(&session_user_id)
    .fetch_all(&mut *pg_connection)
    .await
    {
        Ok(rows) => rows
            .iter()
            .map(ApiSubscription::from_row)
            .collect::<Vec<ApiSubscription>>(),
        Err(err) => {
            tracing::event!(target: "[GET SUBSCRIPTIONS]", tracing::Level::ERROR, "{}", err);
            return Err(actix_web::error::ErrorInternalServerError(json!({
                "code": 10000, // 500 - Empty
            })));
        }
    };

    Ok(HttpResponse::Ok().json(subscriptions))
}
