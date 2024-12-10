use serde_derive::Serialize;

#[derive(Serialize)]
pub struct GetSubscription {
    pub info: String,
}

pub async fn get_subscriptions() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Get Subscriptions endpoint");

    actix_web::HttpResponse::Ok().json(GetSubscription {
        info: "Get Subscriptions endpoint".to_string(),
    })
}
