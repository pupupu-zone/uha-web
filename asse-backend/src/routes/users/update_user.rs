use actix_web::{web, Error, HttpRequest, HttpResponse};
use chrono::{Duration, Timelike, Utc};
use mime::Mime;
use mime_guess::get_mime_extensions;
use serde_json::json;
use std::io::Read;

use crate::service::data_providers::WebDataPool;
use crate::utils::get_session_user_id;

async fn get_file_bytes(
    file: &actix_multipart::form::tempfile::TempFile,
) -> std::io::Result<Vec<u8>> {
    let mut buffer = Vec::new();
    let mut f = &file.file;

    f.read_to_end(&mut buffer)?;

    Ok(buffer)
}

fn is_allowed_file(content_type: &Mime) -> bool {
    let allowed_mime_types = vec![mime::IMAGE_JPEG, mime::IMAGE_PNG];

    allowed_mime_types.contains(content_type)
}

fn get_extension_from_mime(mime_type: &str) -> Option<&'static str> {
    let mime: Mime = mime_type.parse().ok()?;

    get_mime_extensions(&mime).and_then(|exts| exts.first().copied())
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

    if let Some(content_length) = req.headers().get("Content-Length") {
        if let Ok(size) = content_length.to_str().expect("msg").parse::<usize>() {
            if size > 1 * 1024 * 1024 {
                return Ok(HttpResponse::PayloadTooLarge().json(json!({
                    "error": "File too large."
                })));
            }
        }
    }

    let content_type = user
        .avatar
        .as_ref()
        .expect("msg")
        .content_type
        .as_ref()
        .expect("sf");

    if !is_allowed_file(content_type) {
        return Ok(HttpResponse::BadRequest().json(json!({
            "error": "File type not allowed."
        })));
    }

    let session_user_id = get_session_user_id(&session)
        .await
        .expect("You have to be authenticated");

    let file_name = user.avatar.as_ref().expect("msg").file_name.as_ref();
    let file_name = file_name.expect("msg");
    let file_extension = get_extension_from_mime(content_type.as_ref()).expect("msg");

    println!("file_extension: {:?}", file_extension);

    let file_name_to_upload = format!("media/{session_user_id}/avatar.{file_extension}");
    let file_to_upload = match &user.avatar {
        Some(temp_file) => get_file_bytes(temp_file).await?,
        None => Vec::new(),
    };

    let _ = dp
        .minio
        .put_object(&file_name_to_upload, &file_to_upload)
        .await;

    let expiry_time = Utc::now() + Duration::hours(1);
    let expiry_time = expiry_time.second() as u32;
    let signed_url = dp.minio.presign_get(file_name_to_upload, expiry_time, None);

    let usigned_url = signed_url.await.unwrap();

    println!("Uploaded object tmp (1 hr) URL: {}", usigned_url);

    Ok(HttpResponse::Ok().json(json!({})))
}
