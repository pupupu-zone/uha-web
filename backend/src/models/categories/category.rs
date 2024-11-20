use serde::{Deserialize, Serialize};
use sqlx::Row;
use uuid::Uuid;

#[derive(Serialize, Deserialize)]
pub struct Category {
    id: Uuid,
    user_id: Uuid,
    name: String,
    emoji: Option<String>,
    color: String,
    is_public: bool,
}

impl Category {
    pub fn from_row(row: &sqlx::postgres::PgRow) -> Self {
        Self {
            id: row.get("id"),
            user_id: row.get("user_id"),
            name: row.get("name"),
            emoji: row.get("emoji"),
            color: row.get("color"),
            is_public: row.get("is_public"),
        }
    }
}
