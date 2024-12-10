use serde::{Deserialize, Serialize};
use sqlx::Row;
use uuid::Uuid;

#[derive(Serialize, Deserialize)]
pub struct ApiCategory {
    id: Uuid,
    name: String,
    color: String,
    emoji: Option<String>,
}

impl ApiCategory {
    pub fn from_row(row: &sqlx::postgres::PgRow) -> Self {
        Self {
            id: row.get("id"),
            name: row.get("name"),
            color: row.get("color"),
            emoji: row.get("emoji"),
        }
    }
}
