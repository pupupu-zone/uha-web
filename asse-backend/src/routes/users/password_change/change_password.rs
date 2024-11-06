use actix_web::web;
use actix_web::{Error, HttpResponse};
use serde::Deserialize;
use serde_json::json;
use std::fmt::Debug;

use crate::errors::reg_errors;
use crate::service::data_providers::WebDataPool;
use crate::utils::acquire_pg_connection;
use crate::utils::auth::password;
use crate::utils::auth::tokens::verify_confirmation_token_paseto;

#[derive(Debug, Deserialize)]
pub struct Parameters {
    token: String,
    password: String,
}

pub async fn change_user_password(
    params: web::Json<Parameters>,
    dp: web::Data<WebDataPool>,
) -> Result<HttpResponse, Error> {
    /*
     * Create redis connection
     */
    let redis_connection = dp.redis.clone();

    /*
     * Verify token from previous step
     */
    let confirmation_token = match verify_confirmation_token_paseto(
        params.token.clone(),
        redis_connection.clone(),
        Some(true),
    )
    .await
    {
        Ok(token) => token,
        Err(_) => {
            return Err(reg_errors::bad_request("Invalid Token"));
        }
    };

    /*
     * Hash new password
     */
    let hashed_password = password::hash(params.password.as_bytes()).await;

    /*
     * Update password in DB
     */
    let mut pg_connection = acquire_pg_connection(&dp).await?;

    println!("user_id: {}", confirmation_token.user_id);
    println!("hashed_password: {}", hashed_password);

    match sqlx::query("UPDATE users SET password = $1 WHERE id = $2")
        .bind(hashed_password)
        .bind(confirmation_token.user_id)
        .execute(&mut *pg_connection)
        .await
    {
        Ok(_) => true,
        Err(_) => {
            return Err(reg_errors::system("fail to update password"));
        }
    };

    /*
     * Send success message
     */
    Ok(HttpResponse::Ok().json(json!({
        "status": "success",
        "message": "Password has been changed",
    })))
}
