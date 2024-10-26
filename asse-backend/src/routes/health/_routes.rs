use super::heartbeat;
use super::psql_check;
use super::redis_check;

use actix_web::{web, Scope};

pub fn get_routes() -> Scope {
    let health_routes = web::scope("/health")
        .service(web::resource("/heartbeat").route(web::get().to(heartbeat)))
        .service(web::resource("/psql").route(web::get().to(psql_check)))
        .service(web::resource("/redis").route(web::get().to(redis_check)));

    health_routes
}
