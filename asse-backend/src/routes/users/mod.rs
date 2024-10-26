pub mod _routes;

mod delete_user;
pub use delete_user::delete_user;

mod get_personal_data;
pub use get_personal_data::get_personal_data;

mod get_user;
pub use get_user::get_user;

mod update_user;
pub use update_user::update_user;
