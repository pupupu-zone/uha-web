use serde::{Deserialize, Serialize};
use serde_json::Value;
use sqlx::Row;
use uuid::Uuid;

#[derive(Serialize, Deserialize)]
pub struct ApiApplication {
    id: Uuid,
    category_id: Uuid,
    name: String,
    logo_url: Option<String>,
    emoji: Option<String>,
    color: String,
    aliases: Vec<String>,
    links: Value,
}

impl ApiApplication {
    pub fn from_row(row: &sqlx::postgres::PgRow) -> Self {
        Self {
            id: row.get("id"),
            category_id: row.get("category_id"),
            name: row.get("name"),
            logo_url: row.get("logo_url"),
            emoji: row.get("emoji"),
            color: row.get("color"),
            aliases: row.get("aliases"),
            links: row.get("links"),
        }
    }
}
