--
-- USER AUTH
--
CREATE TABLE "users" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "is_sudo" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "is_active" BOOLEAN NOT NULL DEFAULT false,
  "is_deleted" BOOLEAN NOT NULL DEFAULT false,

  PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "users_email_index" ON "users"("email");

--
-- CATEGORIES
--
CREATE TABLE "categories" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL, -- all default categories are owned by admin
  "is_public" BOOLEAN NOT NULL DEFAULT false,
  "name" TEXT NOT NULL,
  "color" VARCHAR(7) NOT NULL DEFAULT '#000000',

  PRIMARY KEY ("id")
);


--
-- APPLICATIONS
--
CREATE TABLE "applications" (
  -- name of the app (netflix, aeza etc)
  "name" TEXT NOT NULL,
  -- primary color of the app. By default color of category
  "color" VARCHAR(7) NOT NULL DEFAULT '#000000',
  -- link to s3 bucket with logo
  "logo_url" TEXT NULL,
  -- Possible aliases to search (e.g. 'Yandex.Music' with 'Яндекс музыка, яма')
  "aliases" TEXT[] NOT NULL DEFAULT '{}'::TEXT[],
  -- links to app (e.g. 'https://aeza.net/?ref=491190')
  "links" JSONB NOT NULL DEFAULT '{}',

  -- if true, show in search for everyone
  "is_public" BOOLEAN NOT NULL DEFAULT false,
  -- If service is no more lives, set this to true
  "is_dead" BOOLEAN NOT NULL DEFAULT false,

  -- Primary key
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  -- all public apps are owned by admin
  "user_id" UUID NOT NULL,
  -- all categories of the app
  "category_id" UUID NOT NULL,

  PRIMARY KEY ("id"),
  FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE,
  FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE CASCADE
);

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
  "interval_type" interval_type NOT NULL, -- ENUM type (e.g., 'day', 'week', 'month', 'year')
  "interval_value" SMALLINT NOT NULL,
  "service" TEXT NULL, -- Description (e.g., 'Lightroom 1TB')
  "currency" VARCHAR(255) NOT NULL DEFAULT 'USD',
  "price" NUMERIC(12, 2) NOT NULL DEFAULT 0,
  "first_payment" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "next_payment" TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  PRIMARY KEY ("id"),

  -- Foreign Keys
  FOREIGN KEY ("app_id") REFERENCES "applications" ("id") ON DELETE CASCADE,
  FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE,

  -- Ensure Non-Negative Price
  CONSTRAINT "price_non_negative" CHECK ("price" >= 0)
);
CREATE INDEX IF NOT EXISTS "subscriptions_currency_user_id_index" ON "subscriptions"("currency", "user_id");
CREATE INDEX IF NOT EXISTS "subscriptions_user_id_index" ON "subscriptions"("user_id");
CREATE INDEX IF NOT EXISTS "subscriptions_app_id_index" ON "subscriptions"("app_id");


--
-- PAYMENTS TIMELINE
--
CREATE TABLE "payments" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL,
  "subscription_id" UUID NOT NULL,
  "amount" NUMERIC(12, 2) NOT NULL,
  "currency" VARCHAR(255) NOT NULL DEFAULT 'USD',
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  PRIMARY KEY ("id"),

  -- Foreign Keys
  FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE,
  FOREIGN KEY ("subscription_id") REFERENCES "subscriptions" ("id") ON DELETE CASCADE,

  -- Ensure Non-Negative Amount
  CONSTRAINT "amount_non_negative" CHECK ("amount" >= 0)
);
CREATE INDEX IF NOT EXISTS "payments_subscription_id_index" ON "payments"("subscription_id");


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