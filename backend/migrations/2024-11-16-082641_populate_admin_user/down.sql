-- Migration: Remove initial user data

BEGIN;

-- Delete from 'user_profiles' table
DELETE FROM "user_profiles"
WHERE "id" = '53e96a11-16b5-439c-86c1-3bd8ff74aadd'
  AND "user_id" = '00000000-0000-0000-0000-000000000000';

-- Delete from 'user_settings' table
DELETE FROM "user_settings"
WHERE "id" = '7df55b40-07f8-4906-b1f8-96afe89dc0c0'
  AND "user_id" = '00000000-0000-0000-0000-000000000000';

-- Delete from 'users' table
DELETE FROM "users"
WHERE "id" = '00000000-0000-0000-0000-000000000000'
  AND "email" = 'test@alena.red';

COMMIT;