use actix_web::web;
use serde::Deserialize;

use crate::service::data_providers::WebDataPool;

#[derive(serde::Deserialize)]
pub struct Parameters {
    token: String,
    password: String,
}

pub async fn change_user_password(params: web::Query<Parameters>, dp: web::Data<WebDataPool>) {
    /*
     * Create redis connection
     */

    /*
     * Verify token from previous step
     */

    /*
     * Hash new password
     */

    /*
     * Update password in DB
     */

    /*
     * Send success message
     */
}
