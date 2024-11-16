-- Migration: Insert initial user data

-- Insert into 'users' table
INSERT INTO "users" (
  "id",
  "email",
  "password",
  "is_staff",
  "is_superuser",
  "created_at",
  "updated_at",
  "is_active",
  "is_deleted"
) VALUES (
  '5bc0ec7f-1206-4949-a8d8-0321daf4e71b',
  'test@alena.red',
  '$argon2id$v=19$m=19456,t=2,p=1$K3/6CNCbG7Msi5rRylABhw$zjWyTFOb2GAlYWMa5wSwkJrB3tUJHHoXYrfNOZY7RPU',
  true,
  true,
  '2024-11-16 08:13:36.273365+00',
  '2024-11-16 08:13:36.273365+00',
  true,
  false
);

-- Insert into 'user_settings' table
INSERT INTO "user_settings" (
  "id",
  "user_id",
  "theme",
  "default_currency",
  "recalc_currency",
  "language"
) VALUES (
  '7df55b40-07f8-4906-b1f8-96afe89dc0c0',
  '5bc0ec7f-1206-4949-a8d8-0321daf4e71b',
  'system',
  'USD',
  'USD'
  'en'
);

-- Insert into 'user_profiles' table
INSERT INTO "user_profiles" (
  "id",
  "user_id",
  "name",
  "avatar_url"
) VALUES (
  '53e96a11-16b5-439c-86c1-3bd8ff74aadd',
  '5bc0ec7f-1206-4949-a8d8-0321daf4e71b',
  'Swift Echidna',
  'https://s3.keireira.com/subsawwy-demo/media/avatars/a3f48339-90ec-438e-b8b8-9b1b5e9e3b0e.jfif'
);