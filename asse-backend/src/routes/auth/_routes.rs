use super::login;
use super::logout;
use super::new_token;
use super::register;
use super::verify_email;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let auth_routes = web::scope("/auth")
        .service(web::resource("/sign-in").route(web::post().to(login)))
        .service(web::resource("/sign-up").route(web::post().to(register)))
        .service(web::resource("/sign-out").route(web::delete().to(logout)))
        .service(web::resource("/validate").route(web::post().to(verify_email)))
        .service(web::resource("/new-token").route(web::post().to(new_token)));

    auth_routes
}
