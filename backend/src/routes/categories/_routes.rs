use super::get_categories;
use super::get_categories_preview;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let auth_routes = web::scope("/categories")
        .service(web::resource("").route(web::get().to(get_categories)))
        .service(web::resource("/previews").route(web::get().to(get_categories_preview)));

    auth_routes
}
