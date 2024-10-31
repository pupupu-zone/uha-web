use crate::service::env::EnvConfig;
use crate::utils::auth::tokens;

use lettre::transport::smtp::authentication::Credentials;
use lettre::{AsyncSmtpTransport, AsyncTransport, Tokio1Executor};
use minijinja::Environment;
use r2d2_redis::RedisConnectionManager;

pub async fn send_email(
    subject: String,
    name: String,
    email_to: String,
    template_name: String,

    user_id: uuid::Uuid,
    redis: r2d2::Pool<RedisConnectionManager>,
) -> Result<(), String> {
    let envs = EnvConfig::new();
    let mut minijinja_env = Environment::new();

    // Add templates to minijinja
    let verification_email_template = include_str!("../templates/verification_email.html");
    minijinja_env
        .add_template("verification_email", verification_email_template)
        .unwrap();

    let reset_email_template = include_str!("../templates/reset_email.html");
    minijinja_env
        .add_template("reset_email", reset_email_template)
        .unwrap();

    // Set up the recipient of e-mail
    let recipient = format!("{} <{}>", name, email_to);

    // Get token for confirmation link
    let issued_token = match tokens::issue_confirmation_token_paseto(user_id, redis, None).await {
        Ok(token) => token,
        Err(error) => {
            tracing::event!(target: "backend", tracing::Level::ERROR, "{}", error);
            return Err(format!("{}", error));
        }
    };

    let confirmation_link = {
        if template_name == "reset_email.html" {
            format!(
                "{}/auth/change-password?token={}",
                envs.app_url, issued_token,
            )
        } else {
            format!("{}/auth/validate?token={}", envs.app_url, issued_token,)
        }
    };

    let template = minijinja_env.get_template("verification_email").unwrap();

    // Collect data for template
    let current_date_time = chrono::Local::now();
    let expiration_date = current_date_time + chrono::Duration::minutes(envs.token_expiration);
    let ctx = minijinja::context! {
        title => &subject,
        confirmation_link => &confirmation_link,
        domain => &envs.app_url,
        expiration_time => &envs.token_expiration,
        exact_time => &expiration_date.format("%A %B %d, %Y at %r").to_string()
    };
    let html_text = template.render(ctx).unwrap();

    // Create text content for fallback
    let text_content: String = format!(
        r#"
        Tap the link below to confirm your email address.
        {}
        "#,
        format!("{}", confirmation_link)
    );

    // Populate e-mail
    let email = lettre::Message::builder()
        .from(envs.email_from.clone().parse().unwrap())
        .to(recipient.parse().unwrap())
        .subject(subject)
        .multipart(
            lettre::message::MultiPart::alternative()
                .singlepart(
                    lettre::message::SinglePart::builder()
                        .content_type(lettre::message::header::ContentType::TEXT_PLAIN)
                        .body(text_content),
                )
                .singlepart(
                    lettre::message::SinglePart::builder()
                        .content_type(lettre::message::header::ContentType::TEXT_HTML)
                        .body(html_text),
                ),
        )
        .unwrap();

    // assign SMTP credentials
    let smtp_creds = Credentials::new(envs.smtp.username.clone(), envs.smtp.token.clone());
    // create mailer
    let mailer: AsyncSmtpTransport<Tokio1Executor> =
        AsyncSmtpTransport::<Tokio1Executor>::relay(&envs.smtp.server)
            .unwrap()
            .credentials(smtp_creds)
            .build();

    // Send the email
    match mailer.send(email).await {
        Ok(_) => {
            let success_msg = format!("Email sent to {}", email_to);
            tracing::event!(target: "backend", tracing::Level::INFO, success_msg);

            Ok(())
        }

        Err(e) => {
            let fail_msg = format!("Could not send email: {:#?}", e);
            tracing::event!(target: "backend", tracing::Level::ERROR, fail_msg);

            Err(fail_msg)
        }
    }
}
