use serde_derive::Serialize;

#[derive(Serialize)]
pub struct RegisterResponse {
    pub info: String,
}

#[tracing::instrument]
pub async fn register() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Register endpoint");

    actix_web::HttpResponse::Ok().json(RegisterResponse {
        info: "Register endpoint".to_string(),
    })
}
