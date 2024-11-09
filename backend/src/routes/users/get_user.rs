use actix_web::{web, Error, HttpResponse};
use serde_json::json;

use crate::models::users::UserProfile;
use crate::service::data_providers::WebDataPool;
use crate::utils::{acquire_pg_connection, get_session_user_id};

#[tracing::instrument(skip(dp, session))]
pub async fn get_user(
    dp: web::Data<WebDataPool>,
    session: actix_session::Session,
) -> Result<HttpResponse, Error> {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Create App endpoint");

    /*
     * Check permissions
     */
    let session_user_id = match get_session_user_id(&session).await {
        Ok(user_id) => user_id,
        Err(_) => {
            return Ok(HttpResponse::Unauthorized().json(json!({
                "status": "error",
                "message": "Unauthorized."
            })))
        }
    };

    /*
     * Collect user's data from DB by user_id from session
     */
    let mut pg_connection = match acquire_pg_connection(&dp).await {
        Ok(connection) => connection,
        Err(_) => {
            return Ok(HttpResponse::InternalServerError().json(json!({
                "status": "error",
                "message": "Error with the database connection."
            })));
        }
    };

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
        Ok(row) => {
            let user_profile = UserProfile::from_row(&row);

            user_profile
        }
        Err(_) => {
            return Ok(HttpResponse::InternalServerError().json(json!({
                "status": "error",
                "message": "Error with updating the entry"
            })));
        }
    };

    Ok(HttpResponse::Ok().json(json!({
        "status": "success",
        "data": user_profile
    })))
}
