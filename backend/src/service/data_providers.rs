use crate::service::env::EnvConfig;

use s3::bucket::Bucket;
use s3::creds::Credentials;
use s3::region::Region;
use sqlx::postgres::PgPoolOptions;

pub struct WebDataPool {
    pub pg: sqlx::Pool<sqlx::Postgres>,
    pub minio: Box<s3::Bucket>,
}

impl WebDataPool {
    async fn create_db() -> sqlx::Pool<sqlx::Postgres> {
        let env_config = EnvConfig::new();

        let pool = PgPoolOptions::new()
            .max_connections(500)
            .connect(&env_config.db_url)
            .await
            .expect("Postgres connection should be successful");

        println!("[+] Postgres connection pool created.");

        pool
    }

    async fn create_minio() -> Box<s3::Bucket> {
        let envs = EnvConfig::new();
        let base_url = envs.minio_endpoint_url.clone();
        let access_key = envs.minio_access_key.clone();
        let secret_key = envs.minio_secret_key.clone();
        let bucket_name = envs.minio_bucket_name.clone();
        let region = "eu-bulgaria-1".to_string();

        let region = Region::Custom {
            region: region.to_owned(),
            endpoint: base_url.to_owned(),
        };

        let credentials = Credentials::new(
            Some(access_key.as_str()),
            Some(secret_key.as_str()),
            None,
            None,
            None,
        )
        .expect("Should be successful");

        let bucket = Bucket::new(&bucket_name, region.clone(), credentials.clone())
            .expect("Should be successful")
            .with_path_style();

        bucket
    }

    pub async fn new() -> WebDataPool {
        WebDataPool {
            pg: WebDataPool::create_db().await.into(),
            minio: WebDataPool::create_minio().await,
        }
    }
}
