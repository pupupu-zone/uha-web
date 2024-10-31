-- Your SQL goes here

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
  "price" BIGINT NOT NULL DEFAULT 0,

  PRIMARY KEY ("id")
);
CREATE INDEX "subscriptions_currency_user_id_index" ON "subscriptions"("currency", "user_id");
CREATE INDEX "subscriptions_user_id_index" ON "subscriptions"("user_id");
CREATE INDEX "subscriptions_app_id_index" ON "subscriptions"("app_id");


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
CREATE INDEX "users_email_index" ON "users"("email");


--
-- USER SETTINGS
--
CREATE TYPE "theme" AS ENUM (
  'system',
  'dark',
  'light'
);

CREATE TABLE "settings" (
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL UNIQUE,
  "name" TEXT NOT NULL,
  "avatar_url" TEXT NULL,
  "theme" theme NOT NULL DEFAULT 'system',
  "default_currency" CHAR(3) NOT NULL CHECK (default_currency ~ '^[A-Z]{3}$') DEFAULT 'USD',
  "do_recalc" BOOLEAN DEFAULT true,

  PRIMARY KEY ("id")
);
CREATE INDEX "settings_user_id_index" ON "settings"("user_id");


--
-- SUBSCRIPTION APPS
--
CREATE TABLE "applications"(
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "name" TEXT NOT NULL,
  "description" TEXT NULL,
  "logo_url" TEXT NULL,

  PRIMARY KEY ("id")
);


ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");
ALTER TABLE "settings" ADD CONSTRAINT "settings_user_id_unique" UNIQUE("user_id");
ALTER TABLE "settings" ADD CONSTRAINT "settings_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_app_id_foreign" FOREIGN KEY("app_id") REFERENCES "applications"("id");
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");