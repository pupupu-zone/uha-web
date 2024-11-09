use serde_derive::Serialize;

#[derive(Serialize)]
pub struct SearchAppResponse {
    pub info: String,
}

pub async fn search_app() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Search for an App endpoint");

    actix_web::HttpResponse::Ok().json(SearchAppResponse {
        info: "Search for an App endpoint".to_string(),
    })
}
