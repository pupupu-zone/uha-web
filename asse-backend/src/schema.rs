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
    subscription_apps (id) {
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
        price -> Int8,
    }
}

diesel::table! {
    user_auth (id) {
        id -> Uuid,
        email -> Text,
        password -> Text,
        is_staff -> Nullable<Bool>,
        is_superuser -> Nullable<Bool>,
        created_at -> Timestamptz,
        updated_at -> Timestamptz,
        is_active -> Nullable<Bool>,
        is_deleted -> Nullable<Bool>,
    }
}

diesel::table! {
    use diesel::sql_types::*;
    use super::sql_types::Theme;

    user_profiles (id) {
        id -> Uuid,
        user_id -> Uuid,
        name -> Text,
        avatar_url -> Nullable<Text>,
        theme -> Theme,
        #[max_length = 3]
        default_currency -> Bpchar,
        do_recalc -> Nullable<Bool>,
    }
}

diesel::joinable!(subscriptions -> subscription_apps (app_id));
diesel::joinable!(subscriptions -> user_auth (user_id));
diesel::joinable!(user_profiles -> user_auth (user_id));

diesel::allow_tables_to_appear_in_same_query!(
    subscription_apps,
    subscriptions,
    user_auth,
    user_profiles,
);
