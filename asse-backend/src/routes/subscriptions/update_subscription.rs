use serde_derive::Serialize;

#[derive(Serialize)]
pub struct UpdateSubscriptionResponse {
    pub info: String,
}

#[tracing::instrument]
pub async fn update_subscription() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Update Subscription endpoint");

    actix_web::HttpResponse::Ok().json(UpdateSubscriptionResponse {
        info: "Update Subscription endpoint".to_string(),
    })
}
