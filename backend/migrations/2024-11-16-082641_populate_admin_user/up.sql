--
-- INITIAL USER DATA MIGRATION
--

-- Insert admin user
INSERT INTO "users" (
  "id",
  "login",
  "password",
  "is_active"
) VALUES (
  '00000000-0000-0000-0000-000000000000',  -- admin UUID
  'test',
  '$argon2id$v=19$m=19456,t=2,p=1$K3/6CNCbG7Msi5rRylABhw$zjWyTFOb2GAlYWMa5wSwkJrB3tUJHHoXYrfNOZY7RPU',
  true
);

-- Insert admin profile
INSERT INTO "user_profiles" (
  "id",
  "user_id",
  "name",
  "avatar_url"
) VALUES (
  '53e96a11-16b5-439c-86c1-3bd8ff74aadd',
  '00000000-0000-0000-0000-000000000000',  -- admin UUID
  'Aljóna',
  'https://s3.keireira.com/subsawwy-demo/media/avatars/a3f48339-90ec-438e-b8b8-9b1b5e9e3b0e.jfif'
);

-- Insert admin settings
INSERT INTO "user_settings" (
  "id",
  "user_id",
  "theme",
  "language",
  "default_currency",
  "recalc_currency"
) VALUES (
  '7df55b40-07f8-4906-b1f8-96afe89dc0c0',
  '00000000-0000-0000-0000-000000000000',  -- admin UUID
  'system',
  'en',
  'USD',
  'USD'
);