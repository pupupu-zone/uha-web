use crate::service::env::EnvConfig;
use actix_web::body::BoxBody;
use actix_web::{web, HttpResponse};
use serde_json::json;
use sqlx::Row;
use uuid::Uuid;

use crate::service::data_providers::WebDataPool;
use crate::utils::acquire_pg_connection;

pub async fn delete_avatar(
    session_user_id: &Uuid,
    dp: &web::Data<WebDataPool>,
) -> Result<(), HttpResponse<BoxBody>> {
    let envs = EnvConfig::new();

    /*
     * Get previous avatar from db
     */
    let mut pg_transaction = match acquire_pg_connection(&dp).await {
        Ok(connection) => connection,
        Err(_) => {
            return Err(HttpResponse::InternalServerError().json(json!({
                "status": "error",
                "message": "Error with the database connection."
            })));
        }
    };

    let old_avatar_url =
        match sqlx::query("SELECT avatar_url FROM user_profiles WHERE user_id = $1")
            .bind(&session_user_id)
            .fetch_one(&mut *pg_transaction)
            .await
        {
            Ok(row) => {
                let avatar_url: Result<String, sqlx::Error> = row.try_get("avatar_url");

                avatar_url
            }
            Err(_) => {
                return Err(HttpResponse::InternalServerError().json(json!({
                    "status": "error",
                    "message": "Error with accessing the avatar entry"
                })));
            }
        };

    let old_avatar_url = match old_avatar_url {
        Ok(url) => url,
        Err(_) => "".to_string(),
    };

    let prefix = format!("{}/{}", envs.minio_endpoint_url, envs.minio_bucket_name); // "https://s3.keireira.com/subsawwy-demo/";
    let trimmed_url = old_avatar_url
        .strip_prefix(&prefix)
        .unwrap_or(&old_avatar_url);

    if trimmed_url.len() != 0 {
        let _ = dp.minio.delete_object(trimmed_url).await;
    }

    Ok(())
}
