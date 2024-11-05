use crate::types::users::UserForm;
use actix_web::body::BoxBody;
use actix_web::{web, HttpRequest, HttpResponse};
use image::ImageFormat;
use mime::Mime;
use serde_json::json;
use uuid::Uuid;

use crate::service::data_providers::WebDataPool;
use crate::service::env::EnvConfig;
use crate::utils::uploads;
use std::io::Cursor;

pub async fn update_avatar(
    user: &actix_multipart::form::MultipartForm<UserForm>,
    session_user_id: &Uuid,
    dp: &web::Data<WebDataPool>,
    req: &HttpRequest,
) -> Result<String, HttpResponse<BoxBody>> {
    /*
     * Check if the file is too large
     */
    if req
        .headers()
        .get("Content-Length")
        .and_then(|value| value.to_str().ok())
        .and_then(|size_str| size_str.parse::<usize>().ok())
        .filter(|&size| size > 5 * 1024 * 1024)
        .is_some()
    {
        return Err(HttpResponse::PayloadTooLarge().json(json!({
            "status": "error",
            "message": "File too large."
        })));
    }

    /*
     * Check content type
     */
    let content_type = user
        .avatar
        .as_ref()
        .expect("msg")
        .content_type
        .as_ref()
        .expect("sf");

    if !is_allowed_file(content_type) {
        return Err(HttpResponse::BadRequest().json(json!({
            "status": "error",
            "message": "File type not allowed."
        })));
    }

    /*
     * Prepare file to the bucket
     */
    let file_name = Uuid::new_v4().to_string();
    let file_extension = uploads::get_extension_from_mime(content_type.as_ref()).expect("msg");
    let file_name_to_upload = format!("media/{session_user_id}/{file_name}.{file_extension}");

    let file_to_upload = match &user.avatar {
        Some(temp_file) => match uploads::get_file_bytes(temp_file).await {
            Ok(bytes) => compress_image(&bytes, content_type),
            Err(_) => {
                return Err(HttpResponse::InternalServerError().json(json!({
                    "status": "error",
                    "message": "Error reading file bytes."
                })));
            }
        },
        None => Vec::new(),
    };

    /*
     * Upload file to the bucket
     */
    let upload_promise = dp
        .minio
        .put_object(&file_name_to_upload, &file_to_upload)
        .await;

    /*
     * Get url to the uploaded file
     */
    let completed_url = match upload_promise {
        Ok(_) => {
            let envs = EnvConfig::new();

            format!(
                "{}/{}/{}",
                envs.minio_endpoint_url, envs.minio_bucket_name, file_name_to_upload
            )
        }
        Err(_) => {
            return Err(HttpResponse::InternalServerError().json(json!({
                "status": "error",
                "message": "Error uploading file."
            })));
        }
    };

    Ok(completed_url)
}

fn is_allowed_file(content_type: &Mime) -> bool {
    let allowed_mime_types = vec![mime::IMAGE_JPEG, mime::IMAGE_PNG];

    allowed_mime_types.contains(content_type)
}

// Compress and resize the image
fn compress_image(image_data: &[u8], content_type: &Mime) -> Vec<u8> {
    let format = if *content_type == mime::IMAGE_JPEG {
        ImageFormat::Jpeg
    } else if *content_type == mime::IMAGE_PNG {
        ImageFormat::Png
    } else {
        panic!("Unsupported image format");
    };

    let img = image::load_from_memory_with_format(image_data, format).expect("Invalid image data");

    // Resize the image to a maximum dimension (e.g., 800x800 pixels)
    let resized_img = img.resize(320, 320, image::imageops::FilterType::Lanczos3);

    // Compress the image and store it in a buffer
    let mut buffer = Cursor::new(Vec::new());
    resized_img
        .write_to(&mut buffer, format)
        .expect("Failed to write image");

    buffer.into_inner()
}
