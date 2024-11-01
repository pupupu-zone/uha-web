use crate::service;

use log;

use r2d2_redis::RedisConnectionManager;
use sqlx::postgres::PgPoolOptions;

pub struct WebDataPool {
    pub pg: sqlx::Pool<sqlx::Postgres>,
    pub redis: r2d2::Pool<RedisConnectionManager>,
}

impl WebDataPool {
    fn create_redis() -> r2d2::Pool<RedisConnectionManager> {
        let env_config = service::env::EnvConfig::new();

        let manager = RedisConnectionManager::new(env_config.redis_url)
            .expect("Redis connection should be successful");

        log::info!("[+] Redis connection manager created.");

        let redis = r2d2::Pool::builder()
            .build(manager)
            .expect("Redis pool creation should be successful");

        log::info!("[+] Redis connection pool created.");

        redis
    }

    async fn create_db() -> sqlx::Pool<sqlx::Postgres> {
        let env_config = service::env::EnvConfig::new();

        let pool = PgPoolOptions::new()
            .max_connections(500)
            .connect(&env_config.db_url)
            .await
            .expect("Postgres connection should be successful");

        println!("[+] Postgres connection pool created.");

        pool
    }

    pub async fn new() -> WebDataPool {
        WebDataPool {
            pg: WebDataPool::create_db().await.into(),
            redis: WebDataPool::create_redis(),
        }
    }
}
