use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, sqlx::Type)]
#[sqlx(type_name = "theme", rename_all = "lowercase")]
pub enum Theme {
    Light,
    Dark,
    System,
}
