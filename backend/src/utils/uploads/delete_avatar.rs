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
    let mut pg_connection = acquire_pg_connection(dp).await.map_err(|_| {
        HttpResponse::InternalServerError().json(json!({
            "message": "Error with the database connection."
        }))
    })?;

    /*
     * Fetch the old avatar URL from the database
     */
    let row = sqlx::query(
        "
        SELECT
            avatar_url
        FROM
            user_profiles
        WHERE
            user_id = $1
        ",
    )
    .bind(session_user_id)
    .fetch_one(&mut *pg_connection)
    .await
    .map_err(|_| {
        HttpResponse::InternalServerError().json(json!({
            "message": "Error accessing the old avatar entry."
        }))
    })?;

    let old_avatar_url: Option<String> = row.try_get("avatar_url").ok();

    /*
     * Proceed only if an avatar URL exists
     */
    if let Some(old_avatar_url) = old_avatar_url {
        let prefix = format!("{}/{}", envs.minio_endpoint_url, envs.minio_bucket_name);

        let trimmed_url = old_avatar_url
            .strip_prefix(&prefix)
            .unwrap_or(&old_avatar_url);

        if !trimmed_url.is_empty() {
            if let Err(err) = dp.minio.delete_object(trimmed_url).await {
                tracing::event!(target: "[AVATAR DELETE]", tracing::Level::ERROR, "Failed to delete avatar from MinIO {:?}", err);
            }
        }
    }

    Ok(())
}
