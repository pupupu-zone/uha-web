use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use sqlx::Row;
use uuid::Uuid;

use crate::models::settings::Currency;
use crate::models::subscriptions::IntervalTypes;

#[derive(Debug, Serialize, Deserialize)]
pub struct ApiSubscription {
    pub id: Uuid,
    pub app_id: Uuid,
    pub payment_method_id: Uuid,
    pub category_id: Uuid,

    pub interval_value: i16,
    pub interval_type: IntervalTypes,

    pub price: f64,
    pub currency: Currency,
    pub divider: i16,

    pub first_payment: DateTime<Utc>,
    pub next_payment: DateTime<Utc>,
}

impl ApiSubscription {
    pub fn from_row(row: &sqlx::postgres::PgRow) -> Self {
        Self {
            id: row.get("id"),
            app_id: row.get("app_id"),
            payment_method_id: row.get("payment_method_id"),
            category_id: row.get("category_id"),

            interval_value: row.get("interval_value"),
            interval_type: row.get("interval_type"),

            price: row.get("price"),
            currency: row.get("currency"),
            divider: 100,

            first_payment: row.get("first_payment"),
            next_payment: row.get("next_payment"),
        }
    }
}
