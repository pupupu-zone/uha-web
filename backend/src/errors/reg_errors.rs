use serde::Serialize;
use serde_json::json;
use std::fmt::Debug;

pub const DEFAULT_MSG: &str = "An error has been occurred. Please try again later";

pub fn system<T: Debug + Serialize>(msg: T) -> actix_web::Error {
    actix_web::error::InternalError::new(
        json!({"errors": { "system": msg }}),
        actix_web::http::StatusCode::INTERNAL_SERVER_ERROR,
    )
    .into()
}
