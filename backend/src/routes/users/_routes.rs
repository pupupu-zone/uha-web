use actix_web::{web, Scope};

use super::get_user;
use super::update_user;

pub fn get_routes() -> Scope {
    let auth_routes = web::scope("/user")
        .service(web::resource("").route(web::get().to(get_user)))
        .service(web::resource("/update").route(web::put().to(update_user)));

    auth_routes
}
