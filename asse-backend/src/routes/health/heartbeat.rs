use serde_derive::Serialize;

#[derive(Serialize)]
pub struct HealthResponse {
    pub is_healthy: bool,
    pub text: String,
}

#[tracing::instrument]
pub async fn heartbeat() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Accessing health-check endpoint.");

    actix_web::HttpResponse::Ok().json(HealthResponse {
        is_healthy: true,
        text: "Application is safe and healthy.".to_string(),
    })
}