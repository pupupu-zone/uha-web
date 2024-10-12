use actix_cors::Cors;
use actix_governor::governor::clock::QuantaInstant;
use actix_governor::governor::middleware::NoOpMiddleware;
use actix_governor::{Governor, GovernorConfigBuilder, PeerIpKeyExtractor};
use actix_web::middleware::{Compress, Logger};

pub struct Middlewares {
    pub cors: Cors,
    pub compress: Compress,
    pub logger: Logger,
    pub governor: Governor<PeerIpKeyExtractor, NoOpMiddleware<QuantaInstant>>,
}

impl Middlewares {
    fn get_governor() -> Governor<PeerIpKeyExtractor, NoOpMiddleware<QuantaInstant>> {
        let governor_conf = GovernorConfigBuilder::default()
            .seconds_per_request(1)
            .burst_size(5)
            .finish()
            .expect("Governor config is not valid");

        let governor: Governor<PeerIpKeyExtractor, NoOpMiddleware<QuantaInstant>> =
            Governor::new(&governor_conf);

        governor
    }

    fn get_cors() -> Cors {
        Cors::default()
            .allow_any_origin()
            // .allowed_origin(&settings.frontend_url)
            .allowed_methods(vec!["GET", "POST", "PATCH", "DELETE"])
            .allowed_headers(vec![
                actix_web::http::header::AUTHORIZATION,
                actix_web::http::header::ACCEPT,
            ])
            .allowed_header(actix_web::http::header::CONTENT_TYPE)
            .expose_headers(&[actix_web::http::header::CONTENT_DISPOSITION])
            .supports_credentials()
            .max_age(3600)
    }

    pub fn new() -> Middlewares {
        Middlewares {
            cors: Middlewares::get_cors(),
            compress: Compress::default(),
            logger: Logger::default(),
            governor: Middlewares::get_governor(),
        }
    }
}
