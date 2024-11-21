use super::get_apps;
use super::get_apps_preview;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let auth_routes = web::scope("/apps")
        .service(web::resource("").route(web::get().to(get_apps)))
        .service(web::resource("/previews").route(web::get().to(get_apps_preview)));

    // .service(web::resource("/").route(web::post().to(create_app)))
    // .service(web::resource("/").route(web::put().to(update_app)))
    // .service(web::resource("/").route(web::delete().to(delete_app)))
    // .service(web::resource("/search").route(web::post().to(search_app)));

    auth_routes
}
