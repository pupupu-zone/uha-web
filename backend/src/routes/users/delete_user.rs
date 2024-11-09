use serde_derive::Serialize;

#[derive(Serialize)]
pub struct DeleteResponse {
    pub info: String,
}

pub async fn delete_user() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Delete User endpoint");

    actix_web::HttpResponse::Ok().json(DeleteResponse {
        info: "Delete User endpoint".to_string(),
    })
}
