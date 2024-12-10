use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, sqlx::Type)]
#[sqlx(type_name = "currencies")]
pub enum Currency {
    USD,
    RUB,
    KZT,
}
