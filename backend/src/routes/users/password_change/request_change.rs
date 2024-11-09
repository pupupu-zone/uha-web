use actix_web::{web, Error, HttpResponse};
use serde::Deserialize;
use serde_json::json;
use sqlx::Row;
use uuid::Uuid;

use crate::service::data_providers::WebDataPool;
use crate::utils::acquire_pg_connection;
use crate::utils::emails::send_email;

#[derive(Deserialize, Debug)]
pub struct Parameters {
    email: String,
}

pub async fn request_password_change(
    user: web::Json<Parameters>,
    dp: web::Data<WebDataPool>,
) -> Result<HttpResponse, Error> {
    /*
     * Get active user from DB by provided E-Mail
     */
    let mut pg_connection = match acquire_pg_connection(&dp).await {
        Ok(connection) => connection,
        Err(_) => {
            return Ok(HttpResponse::Ok().json(json!({
                "status": "success",
                "message": "E-Mail with reset link has been sent to the provided E-Mail, if it exists in our DB and active"
            })));
        }
    };

    let (user_id, user_email) = match sqlx::query(
        "SELECT id, email FROM users WHERE email = $1 AND is_active = TRUE",
    )
    .bind(&user.email)
    .fetch_one(&mut *pg_connection)
    .await
    {
        Ok(row) => {
            let user_email: Result<String, sqlx::Error> = row.try_get("email");
            let user_id: Result<Uuid, sqlx::Error> = row.try_get("id");

            (user_id, user_email)
        }
        Err(_) => {
            return Ok(HttpResponse::Ok().json(json!({
                "status": "success",
                "message": "E-Mail with reset link has been sent to the provided E-Mail, if it exists in our DB and active"
            })));
        }
    };

    /*
     * If no user found, return "E-Mail with reset link has been sent to the provided E-Mail, if it exists in our DB and active"
     */
    let user_id = match user_id {
        Ok(id) => id,
        Err(_) => {
            return Ok(HttpResponse::Ok().json(json!({
                "status": "success",
                "message": "E-Mail with reset link has been sent to the provided E-Mail, if it exists in our DB and active"
            })));
        }
    };

    let user_email = match user_email {
        Ok(email) => email,
        Err(_) => {
            return Ok(HttpResponse::Ok().json(json!({
                "status": "success",
                "message": "E-Mail with reset link has been sent to the provided E-Mail, if it exists in our DB and active"
            })));
        }
    };

    let user_name = match sqlx::query("SELECT name FROM user_profiles WHERE user_id = $1")
        .bind(&user_id)
        .fetch_one(&mut *pg_connection)
        .await
    {
        Ok(row) => {
            let user_name: Result<String, sqlx::Error> = row.try_get("name");

            user_name
        }
        Err(_) => {
            return Ok(HttpResponse::Ok().json(json!({
                "status": "success",
                "message": "E-Mail with reset link has been sent to the provided E-Mail, if it exists in our DB and active"
            })));
        }
    };

    let user_name = match user_name {
        Ok(name) => name,
        Err(_) => "Anonymous".to_string(),
    };

    /*
     * Send E-Mail with token to the user
     */
    tokio::spawn(async move {
        send_email(
            "Request to Change Password".to_string(),
            user_name,
            user_email,
            "reset_email".to_string(),
            user_id,
            dp.redis.clone(),
        )
        .await
        .map_err(|_| HttpResponse::Ok().json(json!({
            "status": "success",
            "message": "E-Mail with reset link has been sent to the provided E-Mail, if it exists in our DB and active"
        })))
        .expect("E-Mail have to be sent");
    });

    /*
     * return "E-Mail with reset link has been sent to the provided E-Mail, if it exists in our DB and active"
     */
    Ok(HttpResponse::Ok().json(json!({
        "status": "success",
        "message": "E-Mail with reset link has been sent to the provided E-Mail, if it exists in our DB and active"
    })))
}
