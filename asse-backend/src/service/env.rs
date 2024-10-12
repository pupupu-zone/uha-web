use dotenvy::dotenv;
use log;
use std::env;

#[derive(Debug, Clone)]
pub struct EnvConfig {
    // Base
    pub port: u16,
    pub hostname: String,
}

impl EnvConfig {
    pub fn new() -> EnvConfig {
        dotenv().ok();
        log::info!("[+] Reading ENV configuration.");

        EnvConfig {
            // base params
            hostname: env::var("API_HOSTNAME").expect("API_HOSTNAME must be set"),
            port: env::var("API_PORT")
                .expect("API_PORT must be set")
                .parse::<u16>()
                .expect("API_PORT must be a number"),
        }
    }
}
