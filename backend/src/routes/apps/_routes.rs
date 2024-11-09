use super::create_app;
use super::delete_app;
use super::search_app;
use super::update_app;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let auth_routes = web::scope("/apps")
        .service(web::resource("/").route(web::post().to(create_app)))
        .service(web::resource("/").route(web::put().to(update_app)))
        .service(web::resource("/").route(web::delete().to(delete_app)))
        .service(web::resource("/search").route(web::post().to(search_app)));

    auth_routes
}
