-- Your SQL goes here

--
-- APPLICATIONS
--
CREATE TABLE "applications" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "name" TEXT NOT NULL,
  "description" TEXT NULL,
  "logo_url" TEXT NULL,

  PRIMARY KEY ("id")
);


--
-- USER AUTH
--
CREATE TABLE "users" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "is_staff" BOOLEAN NOT NULL DEFAULT false,
  "is_superuser" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "is_active" BOOLEAN NOT NULL DEFAULT false,
  "is_deleted" BOOLEAN NOT NULL DEFAULT false,

  PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "users_email_index" ON "users"("email");

-- 
-- SUBSCRIPTIONS
--
CREATE TYPE "interval_type" AS ENUM (
  'day',
  'week',
  'fortnight',
  'month',
  'biannual',
  'annual',
  'biennial'
);

CREATE TABLE "subscriptions" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL,
  "app_id" UUID NOT NULL,
  "interval_type" interval_type NOT NULL,
  "interval_value" SMALLINT NOT NULL,
  "comment" TEXT NULL,
  "currency" VARCHAR(255) NOT NULL DEFAULT 'USD',
  "price" MONEY NOT NULL DEFAULT 0,

  PRIMARY KEY ("id"),
  FOREIGN KEY ("app_id") REFERENCES "applications" ("id") ON DELETE CASCADE,
  FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS "subscriptions_currency_user_id_index" ON "subscriptions"("currency", "user_id");
CREATE INDEX IF NOT EXISTS "subscriptions_user_id_index" ON "subscriptions"("user_id");
CREATE INDEX IF NOT EXISTS "subscriptions_app_id_index" ON "subscriptions"("app_id");


--
-- USER PROFILES
--
CREATE TYPE "theme" AS ENUM (
  'system',
  'dark',
  'light'
);

CREATE TABLE "user_profiles" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL UNIQUE,
  "name" TEXT NOT NULL,
  "avatar_url" TEXT NULL,

  PRIMARY KEY ("id"),
  FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS "user_profiles_user_id_index" ON "user_profiles"("user_id");

--
-- USER SETTINGS
--

CREATE TABLE "user_settings" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL UNIQUE,
  "theme" theme NOT NULL DEFAULT 'system',
  "default_currency" CHAR(3) NOT NULL CHECK (default_currency ~ '^[A-Z]{3}$') DEFAULT 'USD',
  "recalc_currency" CHAR(3) NOT NULL CHECK (recalc_currency ~ '^[A-Z]{3}$') DEFAULT 'USD',
  "language" CHAR(2) NOT NULL DEFAULT 'en',

  PRIMARY KEY ("id"),
  FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE
);