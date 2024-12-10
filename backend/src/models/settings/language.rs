use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, sqlx::Type)]
#[sqlx(type_name = "languages", rename_all = "lowercase")]
pub enum Language {
    En,
    Ru,
    Kz,
}
