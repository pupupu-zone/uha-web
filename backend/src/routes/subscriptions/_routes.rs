use super::get_subscriptions;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let auth_routes = web::scope("/subscriptions")
        .service(web::resource("").route(web::get().to(get_subscriptions)));

    auth_routes
}
