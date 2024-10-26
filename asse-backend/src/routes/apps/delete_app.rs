use serde_derive::Serialize;

#[derive(Serialize)]
pub struct DeleteAppResponse {
    pub info: String,
}

#[tracing::instrument]
pub async fn delete_app() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "DeleteApp endpoint");

    actix_web::HttpResponse::Ok().json(DeleteAppResponse {
        info: "DeleteApp endpoint".to_string(),
    })
}
