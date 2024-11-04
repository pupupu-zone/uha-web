use actix_web::{web, Error, HttpRequest, HttpResponse};
use mime::Mime;
use serde_json::json;

use crate::service::data_providers::WebDataPool;
use crate::service::env::EnvConfig;
use crate::utils::get_session_user_id;
use crate::utils::uploads;

fn is_allowed_file(content_type: &Mime) -> bool {
    let allowed_mime_types = vec![mime::IMAGE_JPEG, mime::IMAGE_PNG];

    allowed_mime_types.contains(content_type)
}

#[derive(actix_multipart::form::MultipartForm)]
pub struct UserForm {
    name: Option<actix_multipart::form::text::Text<String>>,
    avatar: Option<actix_multipart::form::tempfile::TempFile>,
}

pub async fn update_user(
    user: actix_multipart::form::MultipartForm<UserForm>,
    dp: web::Data<WebDataPool>,
    session: actix_session::Session,
    req: HttpRequest,
) -> Result<HttpResponse, Error> {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Update user endpoint");

    // Check permissions
    let session_user_id = match get_session_user_id(&session).await {
        Ok(user_id) => user_id,
        Err(_) => {
            return Ok(HttpResponse::Unauthorized().json(json!({
                "status": "error",
                "message": "Unauthorized."
            })))
        }
    };

    // Check file size
    if let Some(content_length) = req.headers().get("Content-Length") {
        if let Ok(size) = content_length.to_str().expect("msg").parse::<usize>() {
            if size > 1 * 1024 * 1024 {
                return Ok(HttpResponse::PayloadTooLarge().json(json!({
                    "status": "error",
                    "message": "File too large."
                })));
            }
        }
    }

    // Check content type
    let content_type = user
        .avatar
        .as_ref()
        .expect("msg")
        .content_type
        .as_ref()
        .expect("sf");

    if !is_allowed_file(content_type) {
        return Ok(HttpResponse::BadRequest().json(json!({
            "status": "error",
            "message": "File type not allowed."
        })));
    }

    // Prepare file to the bucket
    let file_extension = uploads::get_extension_from_mime(content_type.as_ref()).expect("msg");

    let file_name_to_upload = format!("media/{session_user_id}/avatar.{file_extension}");
    let file_to_upload = match &user.avatar {
        Some(temp_file) => uploads::get_file_bytes(temp_file).await?,
        None => Vec::new(),
    };

    // Upload file to the bucket
    let upload_promise = dp
        .minio
        .put_object(&file_name_to_upload, &file_to_upload)
        .await;

    let completed_url = match upload_promise {
        Ok(_) => {
            let envs = EnvConfig::new();

            format!(
                "{}/{}/{}",
                envs.minio_endpoint_url, envs.minio_bucket_name, file_name_to_upload
            )
        }
        Err(_) => {
            return Ok(HttpResponse::InternalServerError().json(json!({
                "status": "error",
                "message": "Error uploading file."
            })));
        }
    };

    println!("Uploaded object URL: {}", completed_url);

    // Save url to the database

    // Save name to the database

    Ok(HttpResponse::Ok().json(json!({
        "status": "success",
        "data": {
            "avatar": completed_url
        }
    })))
}
