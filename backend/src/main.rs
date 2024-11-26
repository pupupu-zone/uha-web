pub mod errors;
pub mod models;
pub mod routes;
pub mod schema;
pub mod service;
pub mod types;
pub mod utils;

use log;
extern crate diesel;
use actix_web::{self, web, App, HttpServer};
use routes::{apps, auth, categories, health, payments, subscriptions, users};
use utils::check_port_in_use;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    service::service_logger::init_logger();
    log::info!("Main bootstrap subsawwy server starts");

    let env_config = service::env::EnvConfig::new();

    // Check if port is in use
    let (is_in_use, process_info) = check_port_in_use(&env_config.hostname, env_config.port);
    if is_in_use {
        log::error!("Port {} is already in use!", env_config.port);
        log::error!("Process information:\n{}", process_info);
        std::process::exit(1);
    }

    let tel_subscriber = service::telemetry::get_subscriber(env_config.with_debug);
    service::telemetry::init_subscriber(tel_subscriber);

    service::in_deploy_migrations::run_migrations(
        env_config.db_url.clone(),
        env_config.with_migration,
    );

    tracing::event!(target: "backend", tracing::Level::INFO, "Listening on http://{}:{}", env_config.hostname, env_config.port);

    let data_providers = async {
        let pool: service::data_providers::WebDataPool =
            service::data_providers::WebDataPool::new().await.into();

        pool
    }
    .await;

    let data_providers = web::Data::new(data_providers);

    HttpServer::new(move || {
        let middlewares = service::middlewares::Middlewares::new();

        App::new()
            .wrap(middlewares.governor)
            .wrap(middlewares.cors)
            .wrap(middlewares.compress)
            .wrap(middlewares.logger)
            .wrap(middlewares.session)
            .app_data(data_providers.clone())
            .service(health::_routes::get_routes())
            .service(auth::_routes::get_routes())
            .service(users::_routes::get_routes())
            .service(subscriptions::_routes::get_routes())
            .service(apps::_routes::get_routes())
            .service(categories::_routes::get_routes())
            .service(payments::_routes::get_routes())
    })
    .bind((env_config.hostname, env_config.port))?
    .workers(1)
    .run()
    .await
}
