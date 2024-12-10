--
-- ENUMS
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

CREATE TYPE "theme" AS ENUM (
  'system',
  'dark',
  'light'
);

--
-- USERS
--
CREATE TABLE "users" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "email" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "is_sudo" BOOLEAN NOT NULL DEFAULT false,
  "is_active" BOOLEAN NOT NULL DEFAULT false,
  "is_deleted" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  PRIMARY KEY ("id"),
  UNIQUE ("email")
);

CREATE INDEX IF NOT EXISTS "users_email_index" ON "users"("email");

--
-- USER PROFILES
--
CREATE TABLE "user_profiles" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL,
  "name" TEXT NOT NULL,
  "avatar_url" TEXT NULL,

  PRIMARY KEY ("id"),
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
  UNIQUE ("user_id")
);

CREATE INDEX IF NOT EXISTS "user_profiles_user_id_index" ON "user_profiles"("user_id");

--
-- USER SETTINGS
--
CREATE TABLE "user_settings" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL,
  "theme" theme NOT NULL DEFAULT 'system',
  "language" CHAR(2) NOT NULL DEFAULT 'en',
  "default_currency" CHAR(3) NOT NULL DEFAULT 'USD',
  "recalc_currency" CHAR(3) NOT NULL DEFAULT 'USD',

  PRIMARY KEY ("id"),
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
  UNIQUE ("user_id"),
  
  CONSTRAINT "default_currency_format" CHECK (default_currency ~ '^[A-Z]{3}$'),
  CONSTRAINT "recalc_currency_format" CHECK (recalc_currency ~ '^[A-Z]{3}$')
);

--
-- CATEGORIES
--
CREATE TABLE "categories" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL,
  "name" TEXT NOT NULL,
  "emoji" VARCHAR(8) NULL,
  "color" VARCHAR(7) NOT NULL DEFAULT '#000000',
  "is_default" BOOLEAN NOT NULL DEFAULT false,

  PRIMARY KEY ("id"),
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
  UNIQUE ("user_id", "name"),
  
  CONSTRAINT "categories_color_check" CHECK (color ~ '^#[0-9A-Fa-f]{6}$'),
  CONSTRAINT "categories_name_check" CHECK (length(trim(name)) > 0)
);

CREATE INDEX IF NOT EXISTS "categories_user_id_index" ON "categories"("user_id");
CREATE INDEX IF NOT EXISTS "categories_is_default_index" ON "categories"("is_default");

--
-- APPLICATIONS
--
CREATE TABLE "applications" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL,
  "category_id" UUID NOT NULL,
  "name" TEXT NOT NULL,
  "emoji" VARCHAR(8) NULL,
  "logo_url" TEXT NULL,
  "color" VARCHAR(7) NOT NULL DEFAULT '#000000',
  "aliases" TEXT[] NOT NULL DEFAULT '{}'::TEXT[],
  "links" JSONB NOT NULL DEFAULT '{}',
  "is_default" BOOLEAN NOT NULL DEFAULT false,
  "is_dead" BOOLEAN NOT NULL DEFAULT false, -- the app exists no more

  PRIMARY KEY ("id"),
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
  FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE,
  
  CONSTRAINT "applications_color_check" CHECK (color ~ '^#[0-9A-Fa-f]{6}$'),
  CONSTRAINT "applications_name_check" CHECK (length(trim(name)) > 0)
);

CREATE INDEX IF NOT EXISTS "applications_user_id_index" ON "applications"("user_id");
CREATE INDEX IF NOT EXISTS "applications_category_id_index" ON "applications"("category_id");
CREATE INDEX IF NOT EXISTS "applications_is_default_index" ON "applications"("is_default");

--
-- PAYMENT METHODS
--
CREATE TABLE "payment_methods" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL,
  "name" TEXT NOT NULL,
  "comment" TEXT NULL,
  "color" VARCHAR(7) NOT NULL DEFAULT '#000000',
  "emoji" VARCHAR(8) NULL,
  "is_default" BOOLEAN NOT NULL DEFAULT false,
  "is_deleted" BOOLEAN NOT NULL DEFAULT false,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),


  PRIMARY KEY ("id"),
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
  
  CONSTRAINT "payment_methods_color_check" CHECK (color ~ '^#[0-9A-Fa-f]{6}$'),
  CONSTRAINT "payment_methods_name_check" CHECK (length(trim(name)) > 0)
);

CREATE INDEX IF NOT EXISTS "payment_methods_user_id_index" ON "payment_methods"("user_id");
CREATE INDEX IF NOT EXISTS "payment_methods_is_default_index" ON "payment_methods"("is_default");
CREATE INDEX IF NOT EXISTS "payment_methods_is_deleted_index" ON "payment_methods"("is_deleted");

--
-- SUBSCRIPTIONS
--
CREATE TABLE "subscriptions" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL,
  "app_id" UUID NOT NULL,
  "payment_method_id" UUID NOT NULL,
  "service" TEXT NULL,
  "interval_type" interval_type NOT NULL,
  "interval_value" SMALLINT NOT NULL,
  "price" NUMERIC(12, 2) NOT NULL DEFAULT 0,
  "currency" VARCHAR(3) NOT NULL DEFAULT 'USD',
  "first_payment" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "next_payment" TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  PRIMARY KEY ("id"),
  FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
  FOREIGN KEY ("app_id") REFERENCES "applications"("id") ON DELETE CASCADE,
  FOREIGN KEY ("payment_method_id") REFERENCES "payment_methods"("id") ON DELETE RESTRICT,
  
  CONSTRAINT "subscriptions_price_non_negative" CHECK (price >= 0),
  CONSTRAINT "subscriptions_currency_format" CHECK (currency ~ '^[A-Z]{3}$')
);

CREATE INDEX IF NOT EXISTS "subscriptions_user_id_index" ON "subscriptions"("user_id");
CREATE INDEX IF NOT EXISTS "subscriptions_app_id_index" ON "subscriptions"("app_id");
CREATE INDEX IF NOT EXISTS "subscriptions_payment_method_id_index" ON "subscriptions"("payment_method_id");
CREATE INDEX IF NOT EXISTS "subscriptions_currency_user_id_index" ON "subscriptions"("currency", "user_id");