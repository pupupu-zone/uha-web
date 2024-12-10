use serde::{Deserialize, Serialize};
use sqlx::postgres::PgRow;
use sqlx::Row;

use crate::models::settings::Currency;
use crate::models::settings::Language;
use crate::models::settings::Theme;

#[derive(Serialize, Deserialize, Debug)]
pub struct UserProfile {
    pub login: String,
    pub user_id: uuid::Uuid,
    pub name: String,
    pub avatar_url: Option<String>,
    pub theme: Theme,
    pub language: Language,
    pub default_currency: Currency,
    pub recalc_currency: Currency,
}

impl UserProfile {
    pub fn from_row(row: &PgRow) -> Self {
        Self {
            login: row.get("login"),
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
