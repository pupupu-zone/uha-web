// @generated automatically by Diesel CLI.

pub mod sql_types {
    #[derive(diesel::query_builder::QueryId, Clone, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "currencies"))]
    pub struct Currencies;

    #[derive(diesel::query_builder::QueryId, Clone, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "interval_types"))]
    pub struct IntervalTypes;

    #[derive(diesel::query_builder::QueryId, Clone, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "languages"))]
    pub struct Languages;

    #[derive(diesel::query_builder::QueryId, Clone, diesel::sql_types::SqlType)]
    #[diesel(postgres_type(name = "themes"))]
    pub struct Themes;
}

diesel::table! {
    applications (id) {
        id -> Uuid,
        user_id -> Uuid,
        category_id -> Uuid,
        name -> Text,
        #[max_length = 8]
        emoji -> Nullable<Varchar>,
        logo_url -> Nullable<Text>,
        #[max_length = 7]
        color -> Varchar,
        aliases -> Array<Nullable<Text>>,
        links -> Jsonb,
        is_default -> Bool,
        is_archived -> Bool,
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
    payment_methods (id) {
        id -> Uuid,
        user_id -> Uuid,
        name -> Text,
        comment -> Nullable<Text>,
        #[max_length = 7]
        color -> Varchar,
        #[max_length = 8]
        emoji -> Nullable<Varchar>,
        is_default -> Bool,
        is_archived -> Bool,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::IntervalTypes;

    subscriptions (id) {
        id -> Uuid,
        user_id -> Uuid,
        app_id -> Uuid,
        payment_method_id -> Uuid,
        category_id -> Uuid,
        interval_value -> Int2,
        interval_type -> IntervalTypes,
        price -> Numeric,
        #[max_length = 3]
        currency -> Varchar,
        is_trial -> Bool,
        trial_end -> Nullable<Timestamptz>,
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
    use super::sql_types::Themes;
    use super::sql_types::Languages;
    use super::sql_types::Currencies;

    user_settings (id) {
        id -> Uuid,
        user_id -> Uuid,
        theme -> Themes,
        language -> Languages,
        default_currency -> Currencies,
        recalc_currency -> Currencies,
    }
}

diesel::table! {
    users (id) {
        id -> Uuid,
        login -> Text,
        password -> Text,
        is_active -> Bool,
    }
}

diesel::joinable!(applications -> categories (category_id));
diesel::joinable!(applications -> users (user_id));
diesel::joinable!(categories -> users (user_id));
diesel::joinable!(payment_methods -> users (user_id));
diesel::joinable!(subscriptions -> applications (app_id));
diesel::joinable!(subscriptions -> categories (category_id));
diesel::joinable!(subscriptions -> payment_methods (payment_method_id));
diesel::joinable!(subscriptions -> users (user_id));
diesel::joinable!(user_profiles -> users (user_id));
diesel::joinable!(user_settings -> users (user_id));

diesel::allow_tables_to_appear_in_same_query!(
    applications,
    categories,
    payment_methods,
    subscriptions,
    user_profiles,
    user_settings,
    users,
);
