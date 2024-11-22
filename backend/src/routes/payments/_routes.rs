use super::get_payments;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let auth_routes =
        web::scope("/payments").service(web::resource("").route(web::get().to(get_payments)));

    auth_routes
}
