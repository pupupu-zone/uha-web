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
        name -> Text,
        description -> Nullable<Text>,
        logo_url -> Nullable<Text>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::IntervalType;

    subscriptions (id) {
        id -> Uuid,
        user_id -> Uuid,
        app_id -> Uuid,
        interval_type -> IntervalType,
        interval_value -> Int2,
        comment -> Nullable<Text>,
        #[max_length = 255]
        currency -> Varchar,
        price -> Money,
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
        #[max_length = 3]
        default_currency -> Bpchar,
        do_recalc -> Nullable<Bool>,
    }
}

diesel::table! {
    users (id) {
        id -> Uuid,
        email -> Text,
        password -> Text,
        is_staff -> Bool,
        is_superuser -> Bool,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
        is_active -> Bool,
        is_deleted -> Bool,
    }
}

diesel::joinable!(subscriptions -> applications (app_id));
diesel::joinable!(subscriptions -> users (user_id));
diesel::joinable!(user_profiles -> users (user_id));
diesel::joinable!(user_settings -> users (user_id));

diesel::allow_tables_to_appear_in_same_query!(
    applications,
    subscriptions,
    user_profiles,
    user_settings,
    users,
);
