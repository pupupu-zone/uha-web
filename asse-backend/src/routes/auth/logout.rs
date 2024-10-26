use serde_derive::Serialize;

#[derive(Serialize)]
pub struct LogoutResponse {
    pub info: String,
}

#[tracing::instrument]
pub async fn logout() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Logout endpoint");

    actix_web::HttpResponse::Ok().json(LogoutResponse {
        info: "Logout endpoint".to_string(),
    })
}
