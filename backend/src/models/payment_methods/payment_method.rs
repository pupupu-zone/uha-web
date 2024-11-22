use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::Row;
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct PaymentMethod {
    pub id: Uuid,
    pub user_id: Uuid,
    pub name: String,
    pub is_default: bool,
    pub is_deleted: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl PaymentMethod {
    pub fn from_row(row: &sqlx::postgres::PgRow) -> Self {
        Self {
            id: row.get("id"),
            user_id: row.get("user_id"),
            name: row.get("name"),
            is_default: row.get("is_default"),
            is_deleted: row.get("is_deleted"),
            created_at: row.get("created_at"),
            updated_at: row.get("updated_at"),
        }
    }
}
