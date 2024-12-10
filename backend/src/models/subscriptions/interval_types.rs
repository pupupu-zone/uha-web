use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, sqlx::Type)]
#[sqlx(type_name = "interval_types", rename_all = "lowercase")]
pub enum IntervalTypes {
    Day,
    Week,
    Fortnight,
    Month,
    Biannual,
    Annual,
    Biennial,
}
