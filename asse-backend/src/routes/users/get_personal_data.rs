use serde_derive::Serialize;

#[derive(Serialize)]
pub struct GetPersonalDataResponse {
    pub info: String,
}

#[tracing::instrument]
pub async fn get_personal_data() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Get personal Data endpoint");

    actix_web::HttpResponse::Ok().json(GetPersonalDataResponse {
        info: "Get personal Data endpoint".to_string(),
    })
}
