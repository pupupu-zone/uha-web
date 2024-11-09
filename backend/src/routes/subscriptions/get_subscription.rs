use serde_derive::Serialize;

#[derive(Serialize)]
pub struct GetSubscription {
    pub info: String,
}

pub async fn get_subscription() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Get Subscription endpoint");

    actix_web::HttpResponse::Ok().json(GetSubscription {
        info: "Get Subscription endpoint".to_string(),
    })
}
