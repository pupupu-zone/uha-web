use crate::service::data_providers::WebDataPool;
use actix_web::Error;
use actix_web::{web, HttpResponse};
use r2d2_redis::redis::{Commands, Value};
use serde::{Deserialize, Serialize};
use serde_json::json;
use sqlx::Row;
use std::fmt::Debug;
use uuid::Uuid;

use crate::errors::reg_errors;
use crate::utils::acquire_pg_connection;
use crate::utils::emails::send_email;

#[derive(Serialize, Deserialize, Debug)]
pub struct Parameters {
    email: String,
}

/*
 * Generate new verification token for e-mail
*/
pub async fn regenerate_token(
    parameters: web::Json<Parameters>,
    dp: web::Data<WebDataPool>,
) -> Result<HttpResponse, Error> {
    let redis_key = format!("jail_{}", parameters.email.clone());
    let mut redis_connection = dp.redis.clone().get().unwrap();
    /*
     * Check in redis if user is not trying to regenerate token too often
     */
    let is_in_jail = redis_connection.get::<String, Option<String>>(redis_key.clone());

    /*
     * If user is trying to regenerate token too often, return an error
     */
    if is_in_jail.unwrap().is_some() {
        return Err(reg_errors::email(
            "You are trying to regenerate token too often",
        ));
    }

    /*
     * Set in redis value with TTL for 1 minute — email : regeneration_attempt
     */
    redis_connection
        .set::<&str, String, Value>(&redis_key, String::new())
        .expect("Cannot set key in redis");

    redis_connection
        .expire::<String, Value>(redis_key.clone(), 60)
        .expect("Cannot set expiry for key in redis");

    /*
     * Get user from DB with such e-mail and who doesn't active yet
     */
    let mut pg_connection = acquire_pg_connection(&dp).await?;

    let (is_user_active, user_id, user_name) =
        match sqlx::query("SELECT * FROM users WHERE email = $1")
            .bind(&parameters.email)
            .fetch_one(&mut *pg_connection)
            .await
        {
            Ok(row) => {
                let is_user_active: Result<bool, sqlx::Error> = row.try_get("is_active");
                let user_id: Result<Uuid, sqlx::Error> = row.try_get("id");
                let user_name: Result<String, sqlx::Error> = row.try_get("name");

                (is_user_active, user_id, user_name)
            }
            Err(_) => {
                return Err(reg_errors::email(
                    "You have entered invalid e-mail, or user is active already",
                ));
            }
        };

    /*
     * If user is active, then throw an error
     */
    match is_user_active {
        Ok(true) => {
            return Err(reg_errors::email(
                "You have entered invalid e-mail, or user is active already",
            ));
        }
        Ok(false) => {}
        Err(_) => {
            return Err(reg_errors::email(
                "You have entered invalid e-mail, or user is active already",
            ));
        }
    }

    /*
     * if no user, throw an error
     */
    if !user_id.is_ok() {
        return Err(reg_errors::email(
            "You have entered invalid e-mail, or user is active already",
        ));
    }

    /*
     * Send e-mail with verification link
     */
    let user_id = user_id.unwrap();
    let email = parameters.email.clone();
    let user_name = user_name.unwrap_or("Anonymous".to_string());

    tokio::spawn(async move {
        send_email(
            "E-Mail Verification".to_string(),
            user_name,
            email,
            "verification_email".to_string(),
            user_id,
            dp.redis.clone(),
        )
        .await
        .map_err(|err| reg_errors::email(err))
        .expect("E-Mail have to be sent");
    });

    Ok(HttpResponse::Ok().json(json!({
      "info": {
        "user": "Please follow the link in the E-Mail",
      }
    })))
}
