use crate::schema::{user_profiles, users};
use diesel;
use diesel::{Insertable, Queryable, Selectable};
use serde::{Deserialize, Serialize};
use sqlx::postgres::PgRow;
use sqlx::Row;

#[derive(Insertable, Queryable, Selectable, Serialize, Deserialize, Debug)]
#[diesel(table_name = users)]
pub struct UserToRegister {
    pub login: String,
    pub password: String,
}

#[derive(Serialize, Deserialize, Debug, sqlx::Type)]
#[sqlx(type_name = "theme", rename_all = "lowercase")]
pub enum Theme {
    Light,
    Dark,
    System,
}

#[derive(Insertable, Queryable, Selectable, Serialize, Deserialize, Debug)]
#[diesel(table_name = user_profiles)]
pub struct UserProfiles {
    pub id: uuid::Uuid,
    pub user_id: uuid::Uuid,
    pub name: String,
    pub avatar_url: Option<String>,
}

impl UserProfiles {
    pub fn from_row(row: &PgRow) -> Self {
        Self {
            id: row.get("id"),
            user_id: row.get("user_id"),
            name: row.get("name"),
            avatar_url: row.get("avatar_url"),
        }
    }
}

#[derive(Insertable, Queryable, Selectable, Serialize, Deserialize, Debug)]
pub struct User {
    pub id: uuid::Uuid,
    pub login: String,
    pub password: String,
    pub is_active: bool,
}
