use super::delete_user;
use super::get_personal_data;
use super::get_user;
use super::password_change::{
    change_user_password, confirm_password_change, request_password_change,
};
use super::update_user;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let auth_routes = web::scope("/user")
        .service(web::resource("/obtain").route(web::get().to(get_user)))
        .service(web::resource("/update").route(web::put().to(update_user)))
        .service(web::resource("/").route(web::delete().to(delete_user)))
        .service(web::resource("/personal-data").route(web::get().to(get_personal_data)))
        .service(
            web::resource("/password-change/init").route(web::post().to(request_password_change)),
        )
        .service(
            web::resource("/password-change/verify").route(web::post().to(confirm_password_change)),
        )
        .service(web::resource("/password-change/set").route(web::post().to(change_user_password)));

    auth_routes
}
