-- Migration: Drop all created tables, indexes, and types

BEGIN;

---------------------------------------------------
-- 1. Drop Indexes
---------------------------------------------------

-- Drop indexes on 'users' table
DROP INDEX IF EXISTS "users_email_index";

-- Drop indexes on 'user_profiles' table
DROP INDEX IF EXISTS "user_profiles_user_id_index";

-- Drop indexes on 'subscriptions' table
DROP INDEX IF EXISTS "subscriptions_currency_user_id_index";
DROP INDEX IF EXISTS "subscriptions_user_id_index";
DROP INDEX IF EXISTS "subscriptions_app_id_index";

---------------------------------------------------
-- 2. Drop Tables
---------------------------------------------------

-- Drop 'user_settings' table
DROP TABLE IF EXISTS "user_settings" CASCADE;

-- Drop 'user_profiles' table
DROP TABLE IF EXISTS "user_profiles" CASCADE;

-- Drop 'payment_histories' table
DROP TABLE IF EXISTS "payment_histories" CASCADE;

-- Drop 'subscriptions' table
DROP TABLE IF EXISTS "subscriptions" CASCADE;

-- Drop 'applications' table
DROP TABLE IF EXISTS "applications" CASCADE;

-- Drop 'categories' table
DROP TABLE IF EXISTS "categories" CASCADE;

-- Drop 'users' table
DROP TABLE IF EXISTS "users" CASCADE;

---------------------------------------------------
-- 3. Drop Enum Types
---------------------------------------------------

-- Drop 'theme' enum type
DROP TYPE IF EXISTS "theme" CASCADE;

-- Drop 'interval_type' enum type
DROP TYPE IF EXISTS "interval_type" CASCADE;

COMMIT;