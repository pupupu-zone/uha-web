CREATE TABLE "subscriptions"(
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "app_id" UUID NOT NULL,
    "interval_type" VARCHAR(255) CHECK
        (
            "interval_type" IN(
                'day',
                'week',
                'fortnight',
                'month',
                'biannual',
                'annual',
                'biennial'
            )
        ) NOT NULL,
        "interval_value" SMALLINT NOT NULL,
        "comment" TEXT NULL,
        "currency" VARCHAR(255) NOT NULL DEFAULT 'USD',
        "price" DECIMAL(8, 2) NOT NULL
);
CREATE INDEX "subscriptions_currency_index" ON
    "subscriptions"("currency");
CREATE INDEX "subscriptions_user_id_index" ON
    "subscriptions"("user_id");
CREATE INDEX "subscriptions_app_id_index" ON
    "subscriptions"("app_id");
ALTER TABLE
    "subscriptions" ADD PRIMARY KEY("id");
COMMENT
ON COLUMN
    "subscriptions"."interval_type" IS 'день; неделя; две недели; месяц; полгода; год; два года';
COMMENT
ON COLUMN
    "subscriptions"."currency" IS 'Same behavior as for default_currency';
CREATE TABLE "user_auth"(
    "id" UUID NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" TEXT NOT NULL,
    "is_staff" BOOLEAN NOT NULL DEFAULT '0',
    "is_superuse" BOOLEAN NOT NULL DEFAULT '0',
    "created_at" TIMESTAMP(0) WITH
        TIME zone NOT NULL,
        "updated_at" TIMESTAMP(0)
    WITH
        TIME zone NOT NULL,
        "is_active" BOOLEAN NOT NULL DEFAULT '0',
        "is_deleted" BOOLEAN NOT NULL DEFAULT '0'
);
CREATE INDEX "user_auth_email_index" ON
    "user_auth"("email");
ALTER TABLE
    "user_auth" ADD PRIMARY KEY("id");
ALTER TABLE
    "user_auth" ADD CONSTRAINT "user_auth_email_unique" UNIQUE("email");
COMMENT
ON COLUMN
    "user_auth"."email" IS 'User''s avatar to display in app';
COMMENT
ON COLUMN
    "user_auth"."password" IS 'salt';
CREATE TABLE "user_profiles"(
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "avatar_url" TEXT NULL,
    "theme" VARCHAR(255) CHECK
        ("theme" IN('auto', 'dark', 'light')) NOT NULL,
        "default_currency" VARCHAR(255) NOT NULL DEFAULT 'USD',
        "do_recalc" BOOLEAN NOT NULL
);
CREATE INDEX "user_profiles_user_id_index" ON
    "user_profiles"("user_id");
ALTER TABLE
    "user_profiles" ADD PRIMARY KEY("id");
ALTER TABLE
    "user_profiles" ADD CONSTRAINT "user_profiles_user_id_unique" UNIQUE("user_id");
COMMENT
ON COLUMN
    "user_profiles"."name" IS 'User''s name to display in app;

By default this is random positive adjective + some animal, just like at google';
COMMENT
ON COLUMN
    "user_profiles"."default_currency" IS 'download codes from endpoint and pass it to user to choose. Do not forget to verify and satanize!';
COMMENT
ON COLUMN
    "user_profiles"."do_recalc" IS 'If default currency is different from subscription currency, additionally display price in such currency';
CREATE TABLE "subscription_apps"(
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NULL,
    "logo_url" TEXT NULL
);
ALTER TABLE
    "subscription_apps" ADD PRIMARY KEY("id");
ALTER TABLE
    "user_profiles" ADD CONSTRAINT "user_profiles_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user_auth"("id");
ALTER TABLE
    "subscriptions" ADD CONSTRAINT "subscriptions_app_id_foreign" FOREIGN KEY("app_id") REFERENCES "subscription_apps"("id");
ALTER TABLE
    "subscriptions" ADD CONSTRAINT "subscriptions_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "user_auth"("id");