use serde::{Deserialize, Serialize};
use sqlx::Row;
use uuid::Uuid;

#[derive(Serialize, Deserialize)]
pub struct Category {
    id: Uuid,
    user_id: Uuid,
    name: String,
    color: String,
    emoji: Option<String>,
    is_default: bool,
}

impl Category {
    pub fn from_row(row: &sqlx::postgres::PgRow) -> Self {
        Self {
            id: row.get("id"),
            user_id: row.get("user_id"),
            name: row.get("name"),
            color: row.get("color"),
            emoji: row.get("emoji"),
            is_default: row.get("is_default"),
        }
    }
}
