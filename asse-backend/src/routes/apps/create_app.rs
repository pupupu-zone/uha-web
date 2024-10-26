use serde_derive::Serialize;

#[derive(Serialize)]
pub struct CreateAppResponse {
    pub info: String,
}

#[tracing::instrument]
pub async fn create_app() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Create App endpoint");

    actix_web::HttpResponse::Ok().json(CreateAppResponse {
        info: "Create App endpoint".to_string(),
    })
}
