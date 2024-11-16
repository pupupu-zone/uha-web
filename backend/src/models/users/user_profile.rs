use serde::{Deserialize, Serialize};
use sqlx::postgres::PgRow;
use sqlx::Row;

use crate::models::settings::Theme;

#[derive(Serialize, Deserialize, Debug)]
pub struct UserProfile {
    pub email: String,
    pub user_id: uuid::Uuid,
    pub name: String,
    pub avatar_url: Option<String>,
    pub theme: Theme,
    pub default_currency: String,
    pub language: String,
    pub recalc_currency: String,
}

impl UserProfile {
    pub fn from_row(row: &PgRow) -> Self {
        Self {
            email: row.get("email"),
            user_id: row.get("user_id"),
            name: row.get("name"),
            avatar_url: row.get("avatar_url"),
            theme: row.get("theme"),
            recalc_currency: row.get("recalc_currency"),
            default_currency: row.get("default_currency"),
            language: row.get("language"),
        }
    }
}
