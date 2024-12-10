use dotenvy::dotenv;
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
pub struct SMTPConfig {
    pub server: String,
    pub port: u16,
    pub username: String,
    pub token: String,
}

#[derive(Debug, Clone)]
pub struct EnvConfig {
    // Base
    pub port: u16,
    pub hostname: String,
    pub is_dev_mode: bool,
    // Postgres
    pub db_url: String,
    // Params
    pub with_migration: bool,
    pub with_debug: bool,
    // Secrets
    pub secret_key: String,
    pub token_expiration: i64,
    pub hmac_secret: String,
    // S3
    pub minio_bucket_name: String,
    pub minio_endpoint_url: String,
    pub minio_access_key: String,
    pub minio_secret_key: String,
}

impl EnvConfig {
    pub fn new() -> EnvConfig {
        dotenv().ok();

        let with_migration = env::var("MIGRATION").unwrap_or("NOPE".to_string());
        let with_debug = env::var("DEBUG").unwrap_or("NOPE".to_string());

        EnvConfig {
            // base params
            hostname: env::var("API_HOSTNAME").expect("API_HOSTNAME must be set"),
            port: env::var("API_PORT")
                .expect("API_PORT must be set")
                .parse::<u16>()
                .expect("API_PORT must be a number"),
            is_dev_mode: env::var("DEVELOPMENT").unwrap_or("false".to_string()) == "true",

            db_url: env::var("DATABASE_URL").expect("DATABASE_URL must be set"),

            // Additional params
            with_migration: with_migration == "MIGRATION",
            with_debug: with_debug == "DEBUG",

            // Secrets
            secret_key: env::var("SECRET_KEY").expect("SECRET_KEY must be set"),
            token_expiration: env::var("TOKEN_EXPIRATION")
                .expect("TOKEN_EXPIRATION must be set")
                .parse::<i64>()
                .expect("TOKEN_EXPIRATION must be a number"),
            hmac_secret: env::var("HMAC_SECRET").expect("HMAC_SECRET must be set"),

            // minio
            minio_bucket_name: env::var("MINIO_BUCKET_NAME")
                .expect("MINIO_BUCKET_NAME must be set"),
            minio_endpoint_url: env::var("MINIO_ENDPOINT_URL")
                .expect("MINIO_ENDPOINT_URL must be set"),
            // .parse::<BaseUrl>()
            // .expect("MINIO_ENDPOINT_URL must be a valid URL"),
            minio_access_key: env::var("MINIO_ACCESS_KEY").expect("MINIO_ACCESS_KEY must be set"),
            minio_secret_key: env::var("MINIO_SECRET_KEY").expect("MINIO_SECRET_KEY must be set"),
        }
    }
}
