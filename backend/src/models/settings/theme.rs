use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, sqlx::Type)]
#[sqlx(type_name = "themes", rename_all = "lowercase")]
pub enum Theme {
    Light,
    Dark,
    System,
}
