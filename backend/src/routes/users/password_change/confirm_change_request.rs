use actix_web::web;
use actix_web::{Error, HttpResponse};
use serde::Deserialize;
use serde_json::json;

use crate::errors::reg_errors;
use crate::service::data_providers::WebDataPool;
use crate::utils::auth::tokens::{
    issue_confirmation_token_paseto, verify_confirmation_token_paseto,
};

#[derive(Deserialize)]
pub struct Parameters {
    token: String,
}

pub async fn confirm_password_change(
    params: web::Json<Parameters>,
    dp: web::Data<WebDataPool>,
) -> Result<HttpResponse, Error> {
    /*
     * Create redis connection
     */
    let redis_connection = dp.redis.clone();

    /*
     * Verify previously sent token via verify_confirmation_token_paseto
     */
    let confirmation_token = match verify_confirmation_token_paseto(
        params.token.clone(),
        redis_connection.clone(),
        None,
    )
    .await
    {
        Ok(token) => token,
        Err(_) => {
            return Err(reg_errors::bad_request("Invalid Token"));
        }
    };

    /*
     * Issue token with issue_confirmation_token_paseto for password change on next step
     */
    let issued_token = match issue_confirmation_token_paseto(
        confirmation_token.user_id,
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
     * Send redirect via HttpResponse::SeeOther() to the FE with token as query parameter
     */
    Ok(HttpResponse::Ok().json(json!({
        "status": "success",
        "message": "Token is correct",
        "data": {
            "token": issued_token
        }
    })))
}
