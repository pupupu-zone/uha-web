use crate::service::data_providers::WebDataPool;
use actix_web::{web, HttpResponse};
use email_address::EmailAddress;
use serde::{Deserialize, Serialize};
use serde_json::json;
use sqlx::Row;
use std::fmt::Debug;
use uuid::Uuid;

use crate::utils::acquire_pg_connection;
use crate::utils::auth::password;
use crate::utils::emails::send_email;

#[derive(Serialize, Deserialize, Debug)]
pub struct NewUserData {
    name: String,
    email: String,
    password: String,
}

pub async fn register(
    payload: web::Json<NewUserData>,
    dp: web::Data<WebDataPool>,
) -> Result<HttpResponse, actix_web::Error> {
    // @TODO: implement jail system similar to regenerate_token but basing on footprint
    let payload = payload.into_inner();

    /*
     * Check if passed data are valid
     */
    if payload.name.is_empty() {
        tracing::event!(target: "[REGISTRATION]", tracing::Level::ERROR, "Empty password, attempt");

        return Err(actix_web::error::ErrorBadRequest(json!({
            "code": 1006, // 400 - Empty Name
        })));
    }

    if payload.password.is_empty() {
        tracing::event!(target: "[REGISTRATION]", tracing::Level::ERROR, "Empty password, attempt");

        return Err(actix_web::error::ErrorBadRequest(json!({
            "code": 1001, // 400 - Empty Password
        })));
    }

    if EmailAddress::is_valid(&payload.email) == false {
        tracing::event!(target: "[REGISTRATION]", tracing::Level::ERROR, "Invalid E-Mail, attempt");

        return Err(actix_web::error::ErrorBadRequest(json!({
            "code": 1002, // 400 - Not Valid E-Mail
        })));
    }

    /*
     * Hash password & create user with it
     */
    let hashed_password = password::hash(payload.password.as_bytes()).await;

    /*
     * Create user in 'users' table and related entries in 'user_settings' & 'user_profiles' tables
     * Get an assigned user's ID and is_active flag
     */
    let mut pg_connection = acquire_pg_connection(&dp).await?;

    let (user_id, is_active) = match sqlx::query(
        "
            WITH inserted_user AS (
                INSERT INTO users (email, password)
                VALUES ($1, $2)
                ON CONFLICT (email) DO NOTHING
                RETURNING id, is_active
            ),
            selected_user AS (
                SELECT id, is_active FROM inserted_user
                UNION ALL
                SELECT id, is_active FROM users WHERE email = $1 AND NOT EXISTS (SELECT 1 FROM inserted_user)
            ),
            inserted_profile AS (
                INSERT INTO user_profiles (user_id, name)
                SELECT id, $3 FROM selected_user
                ON CONFLICT (user_id) DO NOTHING
            ),
            inserted_settings AS (
                INSERT INTO user_settings (user_id)
                SELECT id FROM selected_user
                ON CONFLICT (user_id) DO NOTHING
            )
            SELECT id, is_active FROM selected_user;
        ",
    )
    .bind(&payload.email)
    .bind(&hashed_password)
    .bind(&payload.name)
    .fetch_one(&mut *pg_connection)
    .await
    {
        Ok(row) => {
            let id: Uuid = row.get("id");
            let is_active: bool = row.get("is_active");

            (id, is_active)
        }
        Err(e) => {
            tracing::event!(target: "[SQLX]", tracing::Level::ERROR, "Error inserting user in DB: {:#?} ({})", &payload.email, e);

            return Err(actix_web::error::ErrorInternalServerError(json!({
                "code": 1007, // 500 - Can’t create a user
            })));
        }
    };

    /*
     * If user is active, throw an error
     */
    if is_active {
        tracing::event!(target: "[REGISTRATION]", tracing::Level::ERROR, "User is in DB already: {:#?}", &payload.email);

        return Err(actix_web::error::ErrorInternalServerError(json!({
            "code": 1007, // 500 - Can’t create a user
        })));
    }

    /*
     * If user isn't active, check redis for existing tokens, if present — regenerate token
     */

    /*
     * Or send a letter with activation link, out of that thread
     */
    tokio::spawn(async move {
        if let Err(err) = send_email(
            "E-Mail Verification".to_string(),
            payload.name.clone(),
            payload.email.clone(),
            "verification_email".to_string(),
            user_id,
            dp.redis.clone(),
        )
        .await
        {
            tracing::event!(target: "[E-MAIL]", tracing::Level::ERROR, "Can't send an E-Mail to: {:#?} ({})", &payload.email, err);
        }
    });

    /*
     * Return nothing but ok and let's hope e-mail will be sent
     */
    Ok(HttpResponse::Ok().json(json!({
        "code": 2000, // 200 - User created
    })))
}
