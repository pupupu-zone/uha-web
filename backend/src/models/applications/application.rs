use serde::{Deserialize, Serialize};
use serde_json::Value;
use sqlx::Row;
use uuid::Uuid;

#[derive(Serialize, Deserialize)]
pub struct Application {
    id: Uuid,
    user_id: Uuid,
    category_id: Uuid,
    name: String,
    logo_url: Option<String>,
    emoji: Option<String>,
    color: String,
    aliases: Vec<String>,
    links: Value,
    is_default: bool,
    is_dead: bool,
}

impl Application {
    pub fn from_row(row: &sqlx::postgres::PgRow) -> Self {
        Self {
            id: row.get("id"),
            user_id: row.get("user_id"),
            category_id: row.get("category_id"),
            name: row.get("name"),
            logo_url: row.get("logo_url"),
            emoji: row.get("emoji"),
            color: row.get("color"),
            aliases: row.get("aliases"),
            links: row.get("links"),
            is_default: row.get("is_default"),
            is_dead: row.get("is_dead"),
        }
    }
}
