-- This file should undo anything in `up.sql`

-- Drop foreign key constraints
ALTER TABLE "subscriptions" DROP CONSTRAINT IF EXISTS "subscriptions_user_id_foreign";
ALTER TABLE "subscriptions" DROP CONSTRAINT IF EXISTS "subscriptions_app_id_foreign";
ALTER TABLE "user_profiles" DROP CONSTRAINT IF EXISTS "user_profiles_user_id_foreign";

-- Drop tables in reverse order to maintain foreign key constraints
DROP TABLE IF EXISTS "subscription_apps";
DROP TABLE IF EXISTS "subscriptions";
DROP TABLE IF EXISTS "user_profiles";
DROP TABLE IF EXISTS "user_auth";

-- Drop indexes
DROP INDEX IF EXISTS "subscriptions_currency_user_id_index";
DROP INDEX IF EXISTS "subscriptions_user_id_index";
DROP INDEX IF EXISTS "subscriptions_app_id_index";
DROP INDEX IF EXISTS "user_auth_email_index";
DROP INDEX IF EXISTS "user_profiles_user_id_index";

-- Drop types
DROP TYPE interval_type, theme;
