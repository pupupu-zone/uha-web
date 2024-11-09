use serde_derive::Serialize;

#[derive(Serialize)]
pub struct DeleteSubscriptionResponse {
    pub info: String,
}

pub async fn delete_subscription() -> actix_web::HttpResponse {
    tracing::event!(target: "backend", tracing::Level::DEBUG, "Delete Subscription endpoint");

    actix_web::HttpResponse::Ok().json(DeleteSubscriptionResponse {
        info: "Delete Subscription endpoint".to_string(),
    })
}
