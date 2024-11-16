use actix_web::{web, Error, HttpResponse};
use serde_json::json;

use crate::service::data_providers::WebDataPool;
use crate::types::auth::UserProfiles;
use crate::types::users::UserForm;
use crate::utils::uploads::{delete_avatar, update_avatar};
use crate::utils::{acquire_pg_connection, get_session_user_id};

pub async fn update_user(
    user: actix_multipart::form::MultipartForm<UserForm>,
    dp: web::Data<WebDataPool>,
    session: actix_session::Session,
) -> Result<HttpResponse, Error> {
    /*
     * Check permissions
     */
    let session_user_id = match get_session_user_id(&session).await {
        Ok(user_id) => user_id,
        Err(err) => {
            tracing::event!(target: "[USER UPDATE]", tracing::Level::ERROR, "{:?}", err);

            return Err(actix_web::error::ErrorUnauthorized(json!({
                "code": 1000, // 401 - Unauthorized
            })));
        }
    };

    /*
     * Check if any field is present
     */
    if user.name.is_none() && user.avatar.is_none() {
        tracing::event!(target: "[USER UPDATE]", tracing::Level::ERROR, "Empty fields");

        return Err(actix_web::error::ErrorUnauthorized(json!({
            "code": 1011, // 400 - Passed fields are not valid
        })));
    }

    /*
     * Update the avatar if avatar key is presented
     */
    let avatar_url = if user.avatar.is_some() {
        match update_avatar(&user, &dp).await {
            Ok(url) => {
                /*
                 * Remove previous avatar
                 */
                if let Err(err) = delete_avatar(&session_user_id, &dp).await {
                    tracing::event!(target: "[USER UPDATE]", tracing::Level::ERROR, "Failed to remove user\'s old avatar {:?}", err);

                    return Err(actix_web::error::ErrorInternalServerError(json!({
                        "code": 1012, // 500 - Could not update avatar
                    })));
                }

                Some(url)
            }
            Err(err) => {
                tracing::event!(target: "[USER UPDATE]", tracing::Level::ERROR, "Failed to update avatar {:?}", err);

                return Err(actix_web::error::ErrorInternalServerError(json!({
                    "code": 1012, // 500 - Could not update avatar
                })));
            }
        }
    } else {
        None
    };

    /*
     * Get username if it is present
     */
    let user_name = user.name.as_deref().cloned();

    /*
     * Save data to the database
     */
    let mut pg_connection = acquire_pg_connection(&dp).await?;

    let user_profile = match sqlx::query(
        "
        UPDATE
            user_profiles
        SET
            name = COALESCE($1, name),
            avatar_url = COALESCE($2, avatar_url)
        WHERE
            user_id = $3
        RETURNING
            *;
    ",
    )
    .bind(&user_name)
    .bind(&avatar_url)
    .bind(&session_user_id)
    .fetch_one(&mut *pg_connection)
    .await
    {
        Ok(row) => {
            let user_profile = UserProfiles::from_row(&row);

            user_profile
        }
        Err(err) => {
            tracing::event!(target: "[USER UPDATE]", tracing::Level::ERROR, "Failed to update profile {:?}", err);

            return Err(actix_web::error::ErrorInternalServerError(json!({
                "code": 1013, // 500 - Could not update profile
            })));
        }
    };

    /*
     * If everything good, return user's profile
     */
    Ok(HttpResponse::Ok().json(user_profile).into())
}
