use crate::types::auth::users::Theme;
use actix_web::{web, Error, HttpResponse};
use serde::{Deserialize, Serialize};
use serde_json::json;
use sqlx::postgres::PgRow;
use sqlx::Row;

use crate::service::data_providers::WebDataPool;
use crate::utils::{acquire_pg_connection, get_session_user_id};

#[derive(Serialize, Deserialize, Debug)]
pub struct UserReturn {
    pub email: String,
    pub user_id: uuid::Uuid,
    pub name: String,
    pub avatar_url: Option<String>,
    pub theme: Theme,
    pub default_currency: String,
    pub do_recalc: bool,
}

impl UserReturn {
    pub fn from_row(row: &PgRow) -> Self {
        Self {
            email: row.get("email"),
            user_id: row.get("user_id"),
            name: row.get("name"),
            avatar_url: row.get("avatar_url"),
            theme: row.get("theme"),
            default_currency: row.get("default_currency"),
            do_recalc: row.get("do_recalc"),
        }
    }
}

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
            let user_profile = UserReturn::from_row(&row);

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
