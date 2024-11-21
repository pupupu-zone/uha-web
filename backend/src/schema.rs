// @generated automatically by Diesel CLI.

pub mod sql_types {
    #[derive(diesel::query_builder::QueryId, Clone, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "interval_type"))]
    pub struct IntervalType;

    #[derive(diesel::query_builder::QueryId, Clone, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "theme"))]
    pub struct Theme;
}

diesel::table! {
    applications (id) {
        id -> Uuid,
        user_id -> Uuid,
        category_id -> Uuid,
        name -> Text,
        logo_url -> Nullable<Text>,
        #[max_length = 7]
        color -> Varchar,
        aliases -> Array<Nullable<Text>>,
        links -> Jsonb,
        is_default -> Bool,
        is_dead -> Bool,
    }
}

diesel::table! {
    categories (id) {
        id -> Uuid,
        user_id -> Uuid,
        name -> Text,
        #[max_length = 8]
        emoji -> Nullable<Varchar>,
        #[max_length = 7]
        color -> Varchar,
        is_default -> Bool,
    }
}

diesel::table! {
    payments (id) {
        id -> Uuid,
        user_id -> Uuid,
        subscription_id -> Uuid,
        amount -> Numeric,
        #[max_length = 3]
        currency -> Varchar,
        created_at -> Timestamptz,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::IntervalType;

    subscriptions (id) {
        id -> Uuid,
        user_id -> Uuid,
        app_id -> Uuid,
        service -> Nullable<Text>,
        interval_type -> IntervalType,
        interval_value -> Int2,
        price -> Numeric,
        #[max_length = 3]
        currency -> Varchar,
        first_payment -> Timestamptz,
        next_payment -> Timestamptz,
    }
}

diesel::table! {
    user_profiles (id) {
        id -> Uuid,
        user_id -> Uuid,
        name -> Text,
        avatar_url -> Nullable<Text>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::Theme;

    user_settings (id) {
        id -> Uuid,
        user_id -> Uuid,
        theme -> Theme,
        #[max_length = 2]
        language -> Bpchar,
        #[max_length = 3]
        default_currency -> Bpchar,
        #[max_length = 3]
        recalc_currency -> Bpchar,
    }
}

diesel::table! {
    users (id) {
        id -> Uuid,
        email -> Text,
        password -> Text,
        is_sudo -> Bool,
        is_active -> Bool,
        is_deleted -> Bool,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
    }
}

diesel::joinable!(applications -> categories (category_id));
diesel::joinable!(applications -> users (user_id));
diesel::joinable!(categories -> users (user_id));
diesel::joinable!(payments -> subscriptions (subscription_id));
diesel::joinable!(payments -> users (user_id));
diesel::joinable!(subscriptions -> applications (app_id));
diesel::joinable!(subscriptions -> users (user_id));
diesel::joinable!(user_profiles -> users (user_id));
diesel::joinable!(user_settings -> users (user_id));

diesel::allow_tables_to_appear_in_same_query!(
    applications,
    categories,
    payments,
    subscriptions,
    user_profiles,
    user_settings,
    users,
);
