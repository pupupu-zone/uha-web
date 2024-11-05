use actix_web::{web, Error, HttpRequest, HttpResponse};
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
    req: HttpRequest,
) -> Result<HttpResponse, Error> {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Update user endpoint");

    // Check permissions
    let session_user_id = match get_session_user_id(&session).await {
        Ok(user_id) => user_id,
        Err(_) => {
            return Ok(HttpResponse::Unauthorized().json(json!({
                "status": "error",
                "message": "Unauthorized."
            })))
        }
    };

    // Check if any field is present
    if user.name.is_none() && user.avatar.is_none() {
        return Ok(HttpResponse::BadRequest().json(json!({
            "status": "error",
            "message": "No fields to update."
        })));
    }

    let mut avatar_url = None;
    if user.avatar.is_some() {
        avatar_url = match update_avatar(&user, &session_user_id, &dp, &req).await {
            Ok(url) => {
                let _ = delete_avatar(&session_user_id, &dp).await;

                Some(url)
            }
            Err(response) => return Ok(response),
        };
    }

    let mut user_name = None;
    if user.name.is_some() {
        user_name = user.name.as_ref().map(|text| text.as_str());
    }

    let mut pg_transaction = match acquire_pg_connection(&dp).await {
        Ok(connection) => connection,
        Err(_) => {
            return Ok(HttpResponse::InternalServerError().json(json!({
                "status": "error",
                "message": "Error with the database connection."
            })));
        }
    };

    // Save data to the database
    let user_profile = match sqlx::query(
        "
        UPDATE user_profiles
        SET
            name = COALESCE($1, name),
            avatar_url = COALESCE($2, avatar_url)
        WHERE user_id = $3
        RETURNING *;
    ",
    )
    .bind(&user_name)
    .bind(&avatar_url)
    .bind(&session_user_id)
    .fetch_one(&mut *pg_transaction)
    .await
    {
        Ok(row) => {
            let user_profile = UserProfiles::from_row(&row);

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
