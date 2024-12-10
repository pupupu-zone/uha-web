use super::login;
use super::logout;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let auth_routes = web::scope("/auth")
        .service(web::resource("/sign-in").route(web::post().to(login)))
        .service(web::resource("/sign-out").route(web::delete().to(logout)));

    auth_routes
}
