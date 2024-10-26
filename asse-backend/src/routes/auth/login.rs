use serde_derive::Serialize;

#[derive(Serialize)]
pub struct LoginResponse {
    pub info: String,
}

#[tracing::instrument]
pub async fn login() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Login endpoint");

    actix_web::HttpResponse::Ok().json(LoginResponse {
        info: "Login endpoint".to_string(),
    })
}
