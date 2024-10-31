use crate::schema::{settings, users};
use diesel;
use diesel::{Insertable, Queryable, Selectable};
use serde::{Deserialize, Serialize};
use sqlx::postgres::PgRow;
use sqlx::Row;

#[derive(Insertable, Queryable, Selectable, Serialize, Deserialize, Debug)]
#[diesel(table_name = users)]
pub struct UserToRegister {
    pub email: String,
    pub password: String,
}

#[derive(Serialize, Deserialize, Debug, sqlx::Type)]
#[sqlx(type_name = "theme", rename_all = "lowercase")]
pub enum Theme {
    Light,
    Dark,
}

#[derive(Queryable, Serialize, Deserialize, Debug)]
#[diesel(table_name = settings)]
pub struct UserSettings {
    pub id: uuid::Uuid,
    pub user_id: uuid::Uuid,
    pub name: String,
    pub avatar_url: Option<String>,
    pub theme: Theme,
    pub default_currency: String,
    pub do_recalc: Option<bool>,
}

impl UserSettings {
    pub fn from_row(row: &PgRow) -> Self {
        Self {
            id: row.get("id"),
            user_id: row.get("user_id"),
            name: row.get("name"),
            avatar_url: row.get("avatar_url"),
            theme: row.get("theme"),
            default_currency: row.get("default_currency"),
            do_recalc: row.get("do_recalc"),
        }
    }
}

#[derive(Insertable, Queryable, Selectable, Serialize, Deserialize, Debug)]
pub struct User {
    pub id: uuid::Uuid,
    pub email: String,
    pub password: String,
    pub is_active: bool,
}
