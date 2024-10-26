use serde_derive::Serialize;

#[derive(Serialize)]
pub struct UpdateUserResponse {
    pub info: String,
}

#[tracing::instrument]
pub async fn update_user() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Update user endpoint");

    actix_web::HttpResponse::Ok().json(UpdateUserResponse {
        info: "Update user endpoint".to_string(),
    })
}
