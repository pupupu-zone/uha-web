use actix_web::web;
use serde::Deserialize;

use crate::service::data_providers::WebDataPool;

#[derive(serde::Deserialize)]
pub struct Parameters {
    token: String,
}

pub async fn confirm_change_password_token(
    params: web::Query<Parameters>,
    dp: web::Data<WebDataPool>,
) {
    /*
     * Create redis connection
     */

    /*
     * Verify previously sent token via verify_confirmation_token_paseto
     */

    /*
     * Issue token with issue_confirmation_token_paseto for password change on next step
     */

    /*
     * Send redirect via HttpResponse::SeeOther() to the FE with token as query parameter
     */
}
