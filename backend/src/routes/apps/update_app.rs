use serde_derive::Serialize;

#[derive(Serialize)]
pub struct UpdateAppResponse {
    pub info: String,
}

pub async fn update_app() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Update app endpoint");

    actix_web::HttpResponse::Ok().json(UpdateAppResponse {
        info: "Update app endpoint".to_string(),
    })
}
