-- Migration: Remove initial user data

BEGIN;

-- Delete from 'user_profiles' table
DELETE FROM "user_profiles"
WHERE "user_id" = '00000000-0000-0000-0000-000000000000';

-- Delete from 'user_settings' table
DELETE FROM "user_settings"
WHERE "user_id" = '00000000-0000-0000-0000-000000000000';

-- Delete from 'users' table
DELETE FROM "users"
WHERE "id" = '00000000-0000-0000-0000-000000000000';

COMMIT;