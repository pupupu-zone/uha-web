DROP TABLE IF EXISTS "user_settings";
DROP TABLE IF EXISTS "user_profiles";
DROP TABLE IF EXISTS "subscriptions";
DROP TABLE IF EXISTS "users";
DROP TABLE IF EXISTS "applications";

-- Drop indexes
DROP INDEX IF EXISTS "subscriptions_currency_user_id_index";
DROP INDEX IF EXISTS "subscriptions_user_id_index";
DROP INDEX IF EXISTS "subscriptions_app_id_index";
DROP INDEX IF EXISTS "users_email_index";
DROP INDEX IF EXISTS "user_profiles_user_id_index";

-- Drop ENUM types
DROP TYPE IF EXISTS "interval_type";
DROP TYPE IF EXISTS "theme";