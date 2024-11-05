pub mod _routes;

mod login;
pub use login::login;

mod logout;
pub use logout::logout;

mod register;
pub use register::register;

mod verify_email;
pub use verify_email::verify_email;

mod new_token;
pub use new_token::new_token;
