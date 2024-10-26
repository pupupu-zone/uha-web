use serde_derive::Serialize;

#[derive(Serialize)]
pub struct VerifyEmailResponse {
    pub info: String,
}

#[tracing::instrument]
pub async fn verify_email() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Verify E-Mail endpoint");

    actix_web::HttpResponse::Ok().json(VerifyEmailResponse {
        info: "Verify E-Mail endpoint".to_string(),
    })
}
