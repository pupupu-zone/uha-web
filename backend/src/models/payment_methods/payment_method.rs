use serde::{Deserialize, Serialize};
use sqlx::Row;
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct ApiPaymentMethod {
    pub id: Uuid,
    pub name: String,
    pub color: Option<String>,
    pub emoji: Option<String>,
    pub comment: Option<String>,
}

impl ApiPaymentMethod {
    pub fn from_row(row: &sqlx::postgres::PgRow) -> Self {
        Self {
            id: row.get("id"),
            name: row.get("name"),
            color: row.get("color"),
            comment: row.get("comment"),
            emoji: row.get("emoji"),
        }
    }
}
