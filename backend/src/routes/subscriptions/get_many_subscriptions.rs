use serde_derive::Serialize;

#[derive(Serialize)]
pub struct GetManySubscriptionsResponse {
    pub info: String,
}

#[tracing::instrument]
pub async fn get_many_subscriptions() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Get Many Subscriptions endpoint");

    actix_web::HttpResponse::Ok().json(GetManySubscriptionsResponse {
        info: "Get Many Subscriptions endpoint".to_string(),
    })
}
