use super::delete_user;
use super::get_personal_data;
use super::get_user;
use super::update_user;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let auth_routes = web::scope("/user")
        .service(web::resource("/").route(web::get().to(get_user)))
        .service(web::resource("/update").route(web::put().to(update_user)))
        .service(web::resource("/").route(web::delete().to(delete_user)))
        .service(web::resource("/personal-data").route(web::get().to(get_personal_data)));

    auth_routes
}
