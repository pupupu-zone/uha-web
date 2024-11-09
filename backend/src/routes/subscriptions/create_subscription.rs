use serde_derive::Serialize;

#[derive(Serialize)]
pub struct CreateSubscriptionResponse {
    pub info: String,
}

pub async fn create_subscription() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Create Subscription endpoint");

    actix_web::HttpResponse::Ok().json(CreateSubscriptionResponse {
        info: "Create Subscription endpoint".to_string(),
    })
}
