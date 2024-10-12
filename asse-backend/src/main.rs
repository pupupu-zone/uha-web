pub mod errors;
pub mod routes;
pub mod service;

use log;
extern crate diesel;
use actix_web::{self, App, HttpServer};
use routes::health;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    service::service_logger::init_logger();
    log::info!("Main bootstrap tanuki server starts");

    let env_config = service::env::EnvConfig::new();

    tracing::event!(target: "backend", tracing::Level::INFO, "Listening on http://{}:{}", env_config.hostname, env_config.port);

    HttpServer::new(move || {
        let middlewares = service::middlewares::Middlewares::new();

        App::new()
            .wrap(middlewares.governor)
            .wrap(middlewares.cors)
            .wrap(middlewares.compress)
            .wrap(middlewares.logger)
            .service(health::_routes::get_routes())
    })
    .bind((env_config.hostname, env_config.port))?
    .workers(1)
    .run()
    .await
}
