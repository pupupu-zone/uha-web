use serde_derive::Serialize;

#[derive(Serialize)]
pub struct GetUserResponse {
    pub info: String,
}

// ADMIN ONLY
#[tracing::instrument]
pub async fn get_user() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Get user endpoint");

    actix_web::HttpResponse::Ok().json(GetUserResponse {
        info: "Get user endpoint".to_string(),
    })
}
