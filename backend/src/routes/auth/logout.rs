use crate::utils::get_session_user_id;
use serde_json::json;

use actix_web::{Error, HttpResponse};

pub async fn logout(session: actix_session::Session) -> Result<HttpResponse, Error> {
    /*
     * Trying to get the user from the session
     */
    let session_user_id = get_session_user_id(&session).await;

    match session_user_id {
        Ok(_) => {
            session.purge();

            return Ok(HttpResponse::Ok().json(json!({})));
        }
        Err(e) => {
            tracing::event!(target: "[LOGOUT]", tracing::Level::ERROR, "Failed to get user from session: {:#?}", e);

            return Err(actix_web::error::ErrorNotFound(json!({
                "code": 1008, // 404 - We can't log you out for now
            })));
        }
    }
}
