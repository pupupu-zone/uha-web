use actix_web::{web, Error, HttpResponse};
use serde_json::json;

use crate::models::users::UserProfile;
use crate::service::data_providers::WebDataPool;
use crate::utils::{acquire_pg_connection, get_session_user_id};

pub async fn get_user(
    dp: web::Data<WebDataPool>,
    session: actix_session::Session,
) -> Result<HttpResponse, Error> {
    /*
     * Check permissions
     */
    let session_user_id = match get_session_user_id(&session).await {
        Ok(user_id) => user_id,
        Err(err) => {
            tracing::event!(target: "[GET USER]", tracing::Level::ERROR, "{}", err);

            return Err(actix_web::error::ErrorUnauthorized(json!({
                "code": 9999, // 401 - Session expired, redirect to /logout
            })));
        }
    };

    /*
     * Get user's profile
     */
    let mut pg_connection = acquire_pg_connection(&dp).await?;

    let user_profile = match sqlx::query(
        "
            SELECT 
                users.id AS user_id,
                users.email,
                user_profiles.name,
                user_profiles.avatar_url,
                user_settings.theme,
                user_settings.default_currency,
                user_settings.do_recalc
            FROM
                users
            JOIN
                user_profiles 
            ON
                users.id = user_profiles.user_id
            JOIN
                user_settings 
            ON
                users.id = user_settings.user_id
            WHERE
                users.id = $1;
    ",
    )
    .bind(&session_user_id)
    .fetch_one(&mut *pg_connection)
    .await
    {
        Ok(row) => UserProfile::from_row(&row),
        Err(_) => {
            return Err(actix_web::error::ErrorNotFound(json!({
                "code": 1004, // 404 - No profile found
            })));
        }
    };

    /*
     * Renew session if everything looks good
     */
    session.renew();

    /*
     * If everything good, return user's profile
     */
    Ok(HttpResponse::Ok().json(user_profile).into())
}
