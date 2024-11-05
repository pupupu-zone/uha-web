use crate::service::data_providers::WebDataPool;
use actix_web::Error;
use actix_web::{web, HttpResponse};
use serde::{Deserialize, Serialize};
use serde_json::json;
use sqlx::Row;
use std::fmt::Debug;
use uuid::Uuid;

use crate::errors::reg_errors;
use crate::utils::acquire_pg_connection;
use crate::utils::emails::send_email;

#[derive(Serialize, Deserialize, Debug)]
pub struct ForgottenUser {
    email: String,
}

/*
 * Generate new verification token for e-mail
*/
pub async fn new_token(
    forgotten: web::Json<ForgottenUser>,
    dp: web::Data<WebDataPool>,
) -> Result<HttpResponse, Error> {
    /*
     * Get user from DB with such e-mail and who doesn't active yet
     */
    let mut pg_connection = acquire_pg_connection(&dp).await?;

    let (is_user_active, user_id, user_name) =
        match sqlx::query("SELECT * FROM users WHERE email = $1")
            .bind(&forgotten.email)
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
    let email = forgotten.email.clone();
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
