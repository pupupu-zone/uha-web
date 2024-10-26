use serde_derive::Serialize;

#[derive(Serialize)]
pub struct HealthResponse {
    pub is_healthy: bool,
    pub text: String,
}

#[tracing::instrument]
pub async fn psql_check() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Accessing DAMIR-TEST-DB.");

    actix_web::HttpResponse::Ok().json(HealthResponse {
        is_healthy: true,
        text: "PostgreSQL is OK".to_string(),
    })
}
