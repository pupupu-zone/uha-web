use crate::service::env::EnvConfig;
use crate::utils::auth::tokens;

use include_dir::{include_dir, Dir};
use lettre::transport::smtp::authentication::Credentials;
use lettre::{AsyncSmtpTransport, AsyncTransport, Tokio1Executor};
use minijinja::Environment;
use r2d2_redis::RedisConnectionManager;

/*
 * Structure for creating plain-text backup of e-mails
*/
pub struct PlainTextBackup {
    text: String,
}

impl PlainTextBackup {
    pub fn reset_email(action_link: String) -> Self {
        Self {
            text: format!(
                r#"
                Tap the link below to proceed with the password reset process
                {}
                "#,
                format!("{}", action_link)
            ),
        }
    }

    pub fn verification_email(action_link: String) -> Self {
        Self {
            text: format!(
                r#"
                Tap the link below to confirm your email address.
                {}
                "#,
                format!("{}", action_link)
            ),
        }
    }
}

pub async fn send_email(
    subject: String,
    name: String,
    email_to: String,
    template_name: String,

    user_id: uuid::Uuid,
    redis: r2d2::Pool<RedisConnectionManager>,
) -> Result<(), String> {
    let envs = EnvConfig::new();

    /*
     * Get active template for minijinja
     */
    let mut minijinja_env = Environment::new();
    let template_file = format!("{}.html", &template_name);
    static TEMPLATES_DIR: Dir = include_dir!("$CARGO_MANIFEST_DIR/src/templates/");

    let active_template = match TEMPLATES_DIR.get_file(&template_file) {
        Some(template) => template,
        None => {
            let error_msg = format!("Could not find template file: {}", &template_file);

            return Err(error_msg);
        }
    };

    let active_template = match active_template.contents_utf8() {
        Some(content) => content,
        None => {
            let error_msg = format!("Template file is not valid UTF-8: {}", &template_file);

            return Err(error_msg);
        }
    };

    /*
     * Load selected template to minijinja
     */
    if let Err(e) = minijinja_env.add_template(&template_name, active_template) {
        let error_msg = format!("Failed to add template to environment: {:?}", e);

        return Err(error_msg);
    }

    /*
     * Create confirmation link
     */
    let issued_token = match tokens::issue_confirmation_token_paseto(user_id, redis, None).await {
        Ok(token) => token,
        Err(error) => {
            let error_msg = format!("{}", error);

            return Err(error_msg);
        }
    };

    let action_link = {
        if template_name == "reset_email" {
            format!(
                "{}/reset-password/verify?token={}",
                envs.app_url, issued_token,
            )
        } else {
            format!("{}/register/verify?token={}", envs.app_url, issued_token,)
        }
    };

    /*
     * Create main template of E-Mail
     */
    let template = match minijinja_env.get_template(&template_name) {
        Ok(temple) => temple, // )))))))))
        Err(e) => {
            let error_msg = format!("Failed to get template: {:?}", e);

            return Err(error_msg);
        }
    };

    let current_date_time = chrono::Local::now();
    let expiration_date = current_date_time + chrono::Duration::minutes(envs.token_expiration);

    let ctx = minijinja::context! {
        title => &subject,
        name => &name,
        action_link => &action_link,
        expiration_time => &envs.token_expiration,
        exact_time => &expiration_date.format("%A %B %d, %Y at %r").to_string()
    };

    let html_text = match template.render(ctx) {
        Ok(text) => text,
        Err(e) => {
            let error_msg = format!("Failed to render template: {:?}", e);

            return Err(error_msg);
        }
    };

    /*
     * Create text-only fallback for E-Mail
     */
    let text_content = match template_name.as_str() {
        "reset_email" => PlainTextBackup::reset_email(action_link),
        "verification_email" => PlainTextBackup::verification_email(action_link),
        _ => {
            let error_msg = format!("Could not find template: {}", &template_name);

            return Err(error_msg);
        }
    };

    /*
     * Create sender and recipient addresses
     */
    let from_address = match envs.email_from.clone().parse() {
        Ok(addr) => addr,
        Err(e) => {
            let error_msg = format!("Invalid sender email address: {:?}", e);

            return Err(error_msg);
        }
    };

    let recipient = format!("{} <{}>", name, email_to);
    let to_address = match recipient.parse() {
        Ok(addr) => addr,
        Err(e) => {
            let error_msg = format!("Invalid recipient email address: {:?}", e);

            return Err(error_msg);
        }
    };

    /*
     * Create (build) an email message itself with fallback and primary parts
     */
    let email = match lettre::Message::builder()
        .from(from_address)
        .to(to_address)
        .subject(subject)
        .multipart(
            lettre::message::MultiPart::alternative()
                .singlepart(
                    lettre::message::SinglePart::builder()
                        .content_type(lettre::message::header::ContentType::TEXT_PLAIN)
                        .body(text_content.text),
                )
                .singlepart(
                    lettre::message::SinglePart::builder()
                        .content_type(lettre::message::header::ContentType::TEXT_HTML)
                        .body(html_text),
                ),
        ) {
        Ok(msg) => msg,
        Err(e) => {
            let error_msg = format!("Failed to build email message: {:?}", e);

            return Err(error_msg);
        }
    };

    /*
     * Load SMTP credentials
     */
    let smtp_creds = Credentials::new(envs.smtp.username.clone(), envs.smtp.token.clone());

    /*
     * Create SMTP transport
     */
    let mailer = match AsyncSmtpTransport::<Tokio1Executor>::starttls_relay(&envs.smtp.server) {
        Ok(transport_builder) => transport_builder.credentials(smtp_creds).build(),
        Err(e) => {
            let error_msg = format!("Failed to create SMTP transport: {:?}", e);

            return Err(error_msg);
        }
    };

    /*
     * Send the email
     */
    match mailer.send(email).await {
        Ok(_) => {
            let success_msg = format!("Email sent to {}", email_to);
            tracing::event!(target: "[E-MAIL]", tracing::Level::INFO, success_msg);

            return Ok(());
        }
        Err(e) => {
            let fail_msg = format!("Could not send email: {:?}", e);

            return Err(fail_msg);
        }
    };
}
