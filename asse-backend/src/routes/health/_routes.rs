use super::db_check;
use super::heartbeat;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let health_routes = web::scope("/")
        .service(web::resource("/heartbeat").route(web::get().to(heartbeat)))
        .service(web::resource("/db").route(web::get().to(db_check)));

    health_routes
}
