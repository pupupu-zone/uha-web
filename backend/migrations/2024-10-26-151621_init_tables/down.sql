--
-- DROP TABLES IN REVERSE ORDER TO RESPECT FOREIGN KEY CONSTRAINTS
--

-- Drop payments table and its indices
DROP INDEX IF EXISTS "payments_user_id_index";
DROP INDEX IF EXISTS "payments_subscription_id_index";
DROP TABLE IF EXISTS "payments";

-- Drop subscriptions table and its indices
DROP INDEX IF EXISTS "subscriptions_user_id_index";
DROP INDEX IF EXISTS "subscriptions_app_id_index";
DROP INDEX IF EXISTS "subscriptions_payment_method_id_index";
DROP INDEX IF EXISTS "subscriptions_currency_user_id_index";
DROP TABLE IF EXISTS "subscriptions";

-- Drop payment methods table and its indices
DROP INDEX IF EXISTS "payment_methods_user_id_index";
DROP INDEX IF EXISTS "payment_methods_is_default_index";
DROP INDEX IF EXISTS "payment_methods_is_deleted_index";
DROP TABLE IF EXISTS "payment_methods";

-- Drop applications table and its indices
DROP INDEX IF EXISTS "applications_user_id_index";
DROP INDEX IF EXISTS "applications_category_id_index";
DROP INDEX IF EXISTS "applications_is_default_index";
DROP TABLE IF EXISTS "applications";

-- Drop categories table and its indices
DROP INDEX IF EXISTS "categories_user_id_index";
DROP INDEX IF EXISTS "categories_is_default_index";
DROP TABLE IF EXISTS "categories";

-- Drop user_settings table
DROP TABLE IF EXISTS "user_settings";

-- Drop user_profiles table and its index
DROP INDEX IF EXISTS "user_profiles_user_id_index";
DROP TABLE IF EXISTS "user_profiles";

-- Drop users table and its index
DROP INDEX IF EXISTS "users_login_index";
DROP TABLE IF EXISTS "users";

--
-- DROP ENUMS
--
DROP TYPE IF EXISTS "interval_type";
DROP TYPE IF EXISTS "theme";