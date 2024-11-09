use super::create_subscription;
use super::delete_subscription;
use super::get_many_subscriptions;
use super::get_subscription;
use super::update_subscription;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let auth_routes = web::scope("/subscriptions")
        .service(web::resource("/").route(web::get().to(get_subscription)))
        .service(web::resource("/").route(web::post().to(create_subscription)))
        .service(web::resource("/").route(web::put().to(update_subscription)))
        .service(web::resource("/").route(web::delete().to(delete_subscription)))
        .service(web::resource("/many").route(web::get().to(get_many_subscriptions)));

    auth_routes
}
