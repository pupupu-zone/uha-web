use super::get_apps;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let auth_routes = web::scope("/apps").service(web::resource("").route(web::get().to(get_apps)));

    auth_routes
}
