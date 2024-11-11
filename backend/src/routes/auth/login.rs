use actix_web::{web, Error, HttpResponse};
use email_address::EmailAddress;
use serde::{Deserialize, Serialize};
use serde_json::json;
use sqlx::Row;
use uuid::Uuid;

use crate::service::data_providers::WebDataPool;
use crate::utils::acquire_pg_connection;
use crate::utils::auth::password::verify_password;

#[derive(Serialize, Deserialize, Debug)]
pub struct LoginRequest {
    pub email: String,
    pub password: String,
}

pub async fn login(
    payload: web::Json<LoginRequest>,
    dp: web::Data<WebDataPool>,
    session: actix_session::Session,
) -> Result<HttpResponse, Error> {
    /*
     * Check if passed data are valid
     */
    if payload.password.is_empty() {
        tracing::event!(target: "[AUTHORIZATION]", tracing::Level::ERROR, "Empty password attempt");

        return Err(actix_web::error::ErrorBadRequest(json!({
            "code": 1001, // 400 - Empty Password
        })));
    }

    if EmailAddress::is_valid(&payload.email) == false {
        tracing::event!(target: "[AUTHORIZATION]", tracing::Level::ERROR, "Invalid E-Mail attempt");

        return Err(actix_web::error::ErrorBadRequest(json!({
            "code": 1002, // 400 - Not Valid E-Mail
        })));
    }

    /*
     * Find user in our DB
     */
    let mut pg_connection = acquire_pg_connection(&dp).await?;

    let (user_id, hashed_password) = match sqlx::query(
        "
            SELECT
                id, password
            FROM
                users
            WHERE
                email = $1
            AND
                is_active = TRUE
        ",
    )
    .bind(&payload.email)
    .fetch_one(&mut *pg_connection)
    .await
    {
        Ok(row) => {
            let id: Uuid = row.get("id");
            let hashed_password: String = row.get("password");

            (id, hashed_password)
        }
        Err(_) => {
            tracing::event!(target: "[SQLX]", tracing::Level::ERROR, "User not found in DB: {:#?}", &payload.email);

            return Err(actix_web::error::ErrorUnauthorized(json!({
                "code": 1005, // 401 - Wrong Credentials
            })));
        }
    };

    /*
     * Check if password is valid
     */
    let is_pass_valid =
        verify_password(hashed_password.as_ref(), &payload.password.as_bytes()).await;

    /*
     * If password invalid, send an error
     */
    if is_pass_valid.is_err() {
        tracing::event!(target: "[AUTHORIZATION]", tracing::Level::ERROR, "Invalid password for user \"{:#?}\"", &payload.email);

        return Err(actix_web::error::ErrorUnauthorized(json!({
            "code": 1005, // 401 - Wrong Credentials
        })));
    }

    /*
     * Renew session, if password is valid
     */
    session.renew();

    /*
     * Insert user_id and user_email into session key, so we can access it everywhere
     */
    if let Err(e) = session.insert(crate::types::USER_ID_KEY, user_id) {
        tracing::event!(target: "TOKEN GENERATOR", tracing::Level::ERROR, "Insert user_id: {:#?}", e);

        return Err(actix_web::error::ErrorInternalServerError(json!({
            "code": 1003, // 500 - Token generation error
        })));
    }

    if let Err(e) = session.insert(crate::types::USER_EMAIL_KEY, &payload.email) {
        tracing::event!(target: "TOKEN GENERATOR", tracing::Level::ERROR, "Insert email: {:#?}", e);

        return Err(actix_web::error::ErrorInternalServerError(json!({
            "code": 1003, // 500 - Token generation error
        })));
    }

    /*
     * If everything good, return just OK with empty object, so FE can parse it. Profile will be fetched on another step
     */
    Ok(HttpResponse::Ok().json(json!({})))
}
