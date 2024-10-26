use dotenvy::dotenv;
use log;
use std::env;

#[derive(Debug, Clone)]
pub struct PostgresConfig {
    // pub scheme: String,
    pub username: String,
    pub password: String,
    pub database: String,
    pub hostname: String,
    pub port: u16,
    pub ssl_mode: bool,
}

#[derive(Debug, Clone)]
pub struct EnvConfig {
    // Base
    pub port: u16,
    pub hostname: String,
    // Postgres
    pub db_url: String,
    // // Redis
    pub redis_url: String,
    // Params
    pub with_migration: bool,
    pub with_debug: bool,
}

impl EnvConfig {
    pub fn new() -> EnvConfig {
        dotenv().ok();
        log::info!("[+] Reading ENV configuration.");

        let with_migration = env::var("MIGRATION").unwrap_or("NOPE".to_string());
        let with_debug = env::var("DEBUG").unwrap_or("NOPE".to_string());

        EnvConfig {
            // base params
            hostname: env::var("API_HOSTNAME").expect("API_HOSTNAME must be set"),
            port: env::var("API_PORT")
                .expect("API_PORT must be set")
                .parse::<u16>()
                .expect("API_PORT must be a number"),
            db_url: env::var("DATABASE_URL").expect("DATABASE_URL must be set"),
            redis_url: env::var("REDIS_URL").expect("REDIS_URL must be set"),

            // Additional params
            with_migration: with_migration == "MIGRATION",
            with_debug: with_debug == "DEBUG",
        }
    }
}
