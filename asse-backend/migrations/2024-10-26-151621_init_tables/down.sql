-- This file should undo anything in `up.sql`

-- Drop foreign key constraints
ALTER TABLE "subscriptions" DROP CONSTRAINT IF EXISTS "subscriptions_user_id_foreign";
ALTER TABLE "subscriptions" DROP CONSTRAINT IF EXISTS "subscriptions_app_id_foreign";
ALTER TABLE "settings" DROP CONSTRAINT IF EXISTS "settings_user_id_foreign";

-- Drop tables in reverse order to maintain foreign key constraints
DROP TABLE IF EXISTS "applications";
DROP TABLE IF EXISTS "subscriptions";
DROP TABLE IF EXISTS "settings";
DROP TABLE IF EXISTS "users";

-- Drop indexes
DROP INDEX IF EXISTS "subscriptions_currency_user_id_index";
DROP INDEX IF EXISTS "subscriptions_user_id_index";
DROP INDEX IF EXISTS "subscriptions_app_id_index";
DROP INDEX IF EXISTS "users_email_index";
DROP INDEX IF EXISTS "settings_user_id_index";

-- Drop types
DROP TYPE interval_type, theme;
