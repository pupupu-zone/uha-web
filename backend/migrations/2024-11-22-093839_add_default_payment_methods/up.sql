--
-- PAYMENT METHODS DATA MIGRATION
--

-- Add default payment methods
INSERT INTO "payment_methods" ("name", "comment", "color", "emoji", "id", "user_id", "is_default", "is_archived") VALUES 
  -- App Store related
  ('Apple Store', 'Primary', '#6420AA', '🍎', '00b3d5fa-50af-4e9d-b4b3-17eba0c49152', '00000000-0000-0000-0000-000000000000', true, false),
  ('Google Play', '', '#FF3EA5', '🪲', 'e52211ce-e2ae-43e4-8d00-276f022f8e3d', '00000000-0000-0000-0000-000000000000', false, false),
  
  -- Digital wallets
  ('PayPal', '', '#007F73', '💸', 'b94c6652-62cf-440d-987f-f04f0bfb4898', '00000000-0000-0000-0000-000000000000', false, false),
  
  -- Traditional payment methods
  ('Debit Card', '*2080', '#DCFFB7', '💳', '88db8f2e-6b1a-45b3-9561-d983824a3507', '00000000-0000-0000-0000-000000000000', false, false),
  ('Credit Card', '*9197', '#FF6868', '🪙', '31c23f10-d072-4518-937d-22bc0e47b48d', '00000000-0000-0000-0000-000000000000', false, false),
  ('Cash', '', '#FFBB64', '💵', '8a3c4f89-937b-4cb0-bba7-7c4c869d908f', '00000000-0000-0000-0000-000000000000', false, false);