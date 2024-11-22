--
-- INITIAL DATA MIGRATION
--

--
-- Categories
--
INSERT INTO "categories" ("id", "user_id", "name", "emoji", "color", "is_default") VALUES 
  -- Utilities
  ('eaef2630-3cea-4095-8b72-40e397ec013a', '00000000-0000-0000-0000-000000000000', 'Utilities', '🔧', '#f6e58d', true),
  -- VPN
  ('ad7ebd55-5d7d-48b8-a6b1-077e4a9f7363', '00000000-0000-0000-0000-000000000000', 'VPN', '🔒', '#ffbe76', true),
  -- Entertainment
  ('4b28f8df-dfaa-4c96-baa5-d7b456122009', '00000000-0000-0000-0000-000000000000', 'Entertainment', '🎮', '#ff7979', true),
  -- Messengers
  ('127e3e76-bdf3-4f85-81ae-9af2ee7a0c00', '00000000-0000-0000-0000-000000000000', 'Messengers', '💬', '#badc58', true),
  -- Magazines
  ('8b668ab1-7b80-4143-b7be-0389529ef2e3', '00000000-0000-0000-0000-000000000000', 'Magazines', '📚', '#22a6b3', true),
  -- For Developers
  ('db03adff-a6fc-4d8d-b4c1-39e8600a9655', '00000000-0000-0000-0000-000000000000', 'For Developers', '👨‍💻', '#f9ca24', true),
  -- AI
  ('680f0da2-d9b0-4f79-8809-347f2923a492', '00000000-0000-0000-0000-000000000000', 'Robotics', '🤖', '#f0932b', true),
  -- Hosting+
  ('69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', 'Hosting+', '☁️', '#eb4d4b', true),
  -- Education
  ('bc6238e6-1555-4320-9d33-0b2835313792', '00000000-0000-0000-0000-000000000000', 'Education', '📚', '#6ab04c', true),
  -- Creativity
  ('a5e9a997-ce4c-4751-a9ba-96f3ec7029d4', '00000000-0000-0000-0000-000000000000', 'Creativity', '🎨', '#be2edd', true),
  -- Video
  ('28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', 'Video', '🎬', '#7ed6df', true),
  -- Music
  ('c36f2f16-01e0-4ae7-b72d-596af02424f5', '00000000-0000-0000-0000-000000000000', 'Music', '🎵', '#e056fd', true),
  -- Monetization Platforms
  ('57e2fa37-b6ba-4340-a8f1-ef431612bf08', '00000000-0000-0000-0000-000000000000', 'Monetization Platforms', '💰', '#686de0', true),
  -- Food
  ('984a7596-7b60-4584-8343-a1d018c0d458', '00000000-0000-0000-0000-000000000000', 'Food', '🍔', '#30336b', true),
  -- Many-in-One
  ('14c572bd-c4a6-4b85-9553-c5939226f75f', '00000000-0000-0000-0000-000000000000', 'Many-in-One', '🎯', '#4834d4', true),
  -- Other
  ('ff3671b4-8924-40bc-a910-507d92fa2e88', '00000000-0000-0000-0000-000000000000', 'Other', '✨', '#4030d4', true);

INSERT INTO "applications" ("name", "logo_url", "color", "is_default", "is_dead", "aliases", "links", "category_id", "user_id", "id") VALUES
  -- Food // 14
  ('Wolt+', 'https://s3.keireira.com/subsawwy-demo/media/apps/wolt.webp', '#3478CD', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://wolt.com/"}'::JSONB, '984a7596-7b60-4584-8343-a1d018c0d458', '00000000-0000-0000-0000-000000000000', 'e7cf4cf3-3622-478f-b8bb-c3e0441d66cd'),
  ('Glovo Prime', 'https://s3.keireira.com/subsawwy-demo/media/apps/glovo.webp', '#F3C366', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://glovoapp.com/"}'::JSONB, '984a7596-7b60-4584-8343-a1d018c0d458', '00000000-0000-0000-0000-000000000000', 'a69611fb-cae9-4ac8-b164-684b08eadf87'),

  -- Monetization Platforms // 13
  ('Patreon', 'https://s3.keireira.com/subsawwy-demo/media/apps/patreon.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.patreon.com/"}'::JSONB, '57e2fa37-b6ba-4340-a8f1-ef431612bf08', '00000000-0000-0000-0000-000000000000', 'a3e52330-c5a2-4b21-870a-f1f91f2644fc'),
  ('Boosty', 'https://s3.keireira.com/subsawwy-demo/media/apps/boosty.webp', '#DF703D', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://boosty.to/"}'::JSONB, '57e2fa37-b6ba-4340-a8f1-ef431612bf08', '00000000-0000-0000-0000-000000000000', '405365d2-7a64-4b72-8271-9e2111184f5a'),
  ('OnlyFans', 'https://s3.keireira.com/subsawwy-demo/media/apps/onlyfans.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://onlyfans.com/"}'::JSONB, '57e2fa37-b6ba-4340-a8f1-ef431612bf08', '00000000-0000-0000-0000-000000000000', 'a49907a8-d8db-48be-aae2-1c23cb184dfb'),
  ('SubscribeStar', 'https://s3.keireira.com/subsawwy-demo/media/apps/subscribe-star.webp', '#429488', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.subscribestar.com/"}'::JSONB, '57e2fa37-b6ba-4340-a8f1-ef431612bf08', '00000000-0000-0000-0000-000000000000', 'a935cf29-d6d3-4e94-bbb6-18a368ed8583'),

  -- Music // 12
  ('Spotify', 'https://s3.keireira.com/subsawwy-demo/media/apps/spotify.webp', '#67D86F', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://spotify.com/"}'::JSONB, 'c36f2f16-01e0-4ae7-b72d-596af02424f5', '00000000-0000-0000-0000-000000000000', '0c495fa5-a0aa-49a9-b0f1-53d4526791d4'),
  ('Deezer', 'https://s3.keireira.com/subsawwy-demo/media/apps/deezer.webp', '#953FF4', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.deezer.com/"}'::JSONB, 'c36f2f16-01e0-4ae7-b72d-596af02424f5', '00000000-0000-0000-0000-000000000000', '83880822-37e0-497d-b884-37639761a7d2'),
  ('Apple Music', 'https://s3.keireira.com/subsawwy-demo/media/apps/apple-music.webp', '#E94E4C', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://music.apple.com/"}'::JSONB, 'c36f2f16-01e0-4ae7-b72d-596af02424f5', '00000000-0000-0000-0000-000000000000', 'b0f42b43-f913-440e-8190-d12d13a40b2a'),
  ('Tidal', 'https://s3.keireira.com/subsawwy-demo/media/apps/tidal.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://tidal.com/"}'::JSONB, 'c36f2f16-01e0-4ae7-b72d-596af02424f5', '00000000-0000-0000-0000-000000000000', 'e9051364-17a2-436b-8ccc-1e49c4a83f40'),

  -- Many-in-One // 15
  ('Yandex.Plus', 'https://s3.keireira.com/subsawwy-demo/media/apps/yandex-plus.webp', '#8547DD', true, false, ARRAY['яндекс'], '{"referral": null, "promo": null, "homepage": "https://plus.yandex.ru/"}'::JSONB, '14c572bd-c4a6-4b85-9553-c5939226f75f', '00000000-0000-0000-0000-000000000000', 'c0111163-3f8c-49eb-9bdd-29450db92528'),
  ('YouTube Premium', 'https://s3.keireira.com/subsawwy-demo/media/apps/youtube-premium.webp', '#DC3021', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.youtube.com/premium"}'::JSONB, '14c572bd-c4a6-4b85-9553-c5939226f75f', '00000000-0000-0000-0000-000000000000', '4dca8fac-bb24-4bc4-aecc-733fc102019b'),
  ('Amazon Prime', 'https://s3.keireira.com/subsawwy-demo/media/apps/amazon-prime.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.amazon.com/amazonprime"}'::JSONB, '14c572bd-c4a6-4b85-9553-c5939226f75f', '00000000-0000-0000-0000-000000000000', '328e683a-f2ae-4c53-adc6-c15efc378af3'),
  ('Google One', 'https://s3.keireira.com/subsawwy-demo/media/apps/google-one.webp', '#FFFFFF', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://one.google.com/"}'::JSONB, '14c572bd-c4a6-4b85-9553-c5939226f75f', '00000000-0000-0000-0000-000000000000', 'c8bc3184-2a11-4a5e-a2b0-49ab1a2872f8'),
  ('Apple One', 'https://s3.keireira.com/subsawwy-demo/media/apps/apple-one.webp', '#7E797F', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.apple.com/apple-one/"}'::JSONB, '14c572bd-c4a6-4b85-9553-c5939226f75f', '00000000-0000-0000-0000-000000000000', '75001b25-12e8-409d-85bd-093a9a53f36a'),

  -- Video // 11
  ('Netflix', 'https://s3.keireira.com/subsawwy-demo/media/apps/netflix.webp', '#D12E25', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.netflix.com/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', '62f3a215-1310-4e56-a63a-2c70012a2427'),
  ('Hulu', 'https://s3.keireira.com/subsawwy-demo/media/apps/hulu.webp', '#6DE48B', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.hulu.com/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', '8c01d523-c341-443a-8ceb-f49f6c5dc213'),
  ('HBO Max', 'https://s3.keireira.com/subsawwy-demo/media/apps/hbo-max.webp', '#6920D1', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.max.com/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', '84f436c0-d247-47f8-812b-fef9496c5b24'),
  ('Apple TV+', 'https://s3.keireira.com/subsawwy-demo/media/apps/apple-tv-plus.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://tv.apple.com/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', '761a216f-8ced-4121-9cf8-104021a66671'),
  ('Disney+', 'https://s3.keireira.com/subsawwy-demo/media/apps/disney-plus.webp', '#020B3D', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.disneyplus.com/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', '4338b59d-424d-41a9-850b-b5b7769ee325'),
  ('Paramount+', 'https://s3.keireira.com/subsawwy-demo/media/apps/paramount-plus.webp', '#2962F6', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.paramountplus.com/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', 'c0bf89cc-daa6-4058-8833-5130273d8dfc'),
  ('Discovery+', 'https://s3.keireira.com/subsawwy-demo/media/apps/discovery-plus.webp', '#FFFFFF', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.discoveryplus.com/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', '60479599-a9c6-4279-92f3-d7298f40d517'),
  ('Curiosity Stream', 'https://s3.keireira.com/subsawwy-demo/media/apps/curiosity-stream.webp', '#E5C050', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://curiositystream.com/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', 'f93d1086-0b57-4a81-b5fd-99bc8eb0bd7a'),
  ('Crunchyroll', 'https://s3.keireira.com/subsawwy-demo/media/apps/crunchyroll.webp', '#ED752F', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.crunchyroll.com/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', '4d2f19e9-ca73-407b-b787-e829fb81c2ac'),
  ('NOW', 'https://s3.keireira.com/subsawwy-demo/media/apps/now-tv.webp', '#182423', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.nowtv.com/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', 'e5fc6da8-19d1-43c6-b6e2-6575efa44dcb'),
  ('Иви', 'https://s3.keireira.com/subsawwy-demo/media/apps/ivi.webp', '#EA334C', true, false, ARRAY['ivi'], '{"referral": null, "promo": null, "homepage": "https://www.ivi.ru/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', '20474a89-0cbd-4709-bd3c-27ffde412d19'),
  ('Кинопоиск', 'https://s3.keireira.com/subsawwy-demo/media/apps/kinopoisk.webp', '#EB662B', true, false, ARRAY['kinopoisk'], '{"referral": null, "promo": null, "homepage": "https://www.kinopoisk.ru/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', 'e46f707e-5087-4cf3-b45f-65778fca95cc'),
  ('Okko', 'https://s3.keireira.com/subsawwy-demo/media/apps/okko.webp', '#73289E', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://okko.tv/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', 'f2f4143c-697a-4533-93b0-b306baaf1ee8'),
  ('Anime365', 'https://s3.keireira.com/subsawwy-demo/media/apps/anime365.webp', '#B3CA47', true, false, ARRAY['smotret-anime', 'аниме'], '{"referral": null, "promo": null, "homepage": "https://smotret-anime.net/"}'::JSONB, '28167422-c5d1-4708-807a-6a6af4c56198', '00000000-0000-0000-0000-000000000000', 'c6f1f309-cafe-43fd-8609-a7375e67da65'),

  -- Creativity // 10
  ('Adobe', 'https://s3.keireira.com/subsawwy-demo/media/apps/adobe.webp', '#D93731', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.adobe.com/"}'::JSONB, 'a5e9a997-ce4c-4751-a9ba-96f3ec7029d4', '00000000-0000-0000-0000-000000000000', '9db0d6dc-22e7-4c2a-96d7-001dfacf21ca'),
  ('Sketch', 'https://s3.keireira.com/subsawwy-demo/media/apps/sketch.webp', '#302D30', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.sketch.com/"}'::JSONB, 'a5e9a997-ce4c-4751-a9ba-96f3ec7029d4', '00000000-0000-0000-0000-000000000000', 'dc920e8f-0288-4f8d-8157-9783ffd66b8e'),
  ('Maxon', 'https://s3.keireira.com/subsawwy-demo/media/apps/maxon.webp', '#BD3630', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.maxon.net/"}'::JSONB, 'a5e9a997-ce4c-4751-a9ba-96f3ec7029d4', '00000000-0000-0000-0000-000000000000', '588b756d-1900-434a-92c0-f44eb3e8c95e'),

  -- Education // 09
  ('Coursehunter', 'https://s3.keireira.com/subsawwy-demo/media/apps/coursehunter.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://coursehunter.net/"}'::JSONB, 'bc6238e6-1555-4320-9d33-0b2835313792', '00000000-0000-0000-0000-000000000000', '937bda83-5f12-49e1-96ea-4a6909375e0c'),
  ('Coursetrain', 'https://s3.keireira.com/subsawwy-demo/media/apps/coursetrain.webp', '#252A2F', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://coursetrain.org/"}'::JSONB, 'bc6238e6-1555-4320-9d33-0b2835313792', '00000000-0000-0000-0000-000000000000', 'f18174ea-dacf-4fba-82dc-3451ae55923c'),

  -- AI // 07
  ('ChatGPT', 'https://s3.keireira.com/subsawwy-demo/media/apps/chatgpt.webp', '#4AA081', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://chatgpt.com/"}'::JSONB, '680f0da2-d9b0-4f79-8809-347f2923a492', '00000000-0000-0000-0000-000000000000', '4b62f62a-f2e5-4638-ad99-28a570dd8c25'),
  ('Claude', 'https://s3.keireira.com/subsawwy-demo/media/apps/claude.webp', '#CE985E', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://claude.ai/"}'::JSONB, '680f0da2-d9b0-4f79-8809-347f2923a492', '00000000-0000-0000-0000-000000000000', '0663cb97-1f33-4e60-9d36-53f8dea57d77'),

  -- For Developers // 06
  ('GitHub', 'https://s3.keireira.com/subsawwy-demo/media/apps/github.webp', '#0E1116', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://github.com/"}'::JSONB, 'db03adff-a6fc-4d8d-b4c1-39e8600a9655', '00000000-0000-0000-0000-000000000000', 'ecbc5168-f1c7-4b35-a723-27e9991a1191'),
  ('GitKraken', 'https://s3.keireira.com/subsawwy-demo/media/apps/gitkraken.webp', '#448F87', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://gitkraken.dev/"}'::JSONB, 'db03adff-a6fc-4d8d-b4c1-39e8600a9655', '00000000-0000-0000-0000-000000000000', '13bc4005-4c72-45c6-9033-0f2b5972b1c1'),
  ('Warp', 'https://s3.keireira.com/subsawwy-demo/media/apps/warp.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.warp.dev/"}'::JSONB, 'db03adff-a6fc-4d8d-b4c1-39e8600a9655', '00000000-0000-0000-0000-000000000000', 'cdc226f5-189e-4cc2-9c2c-cb796637c308'),

  -- Hosting & SAAS // 08
  ('Vultr', 'https://s3.keireira.com/subsawwy-demo/media/apps/vultr.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.vultr.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', 'f32d1877-0e4d-4355-9ea0-464deef4f06f'),
  ('Linode', 'https://s3.keireira.com/subsawwy-demo/media/apps/linode.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.linode.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', '87b0a63f-db31-4c5b-8ed0-fa23a05590a8'),
  ('Heroku', 'https://s3.keireira.com/subsawwy-demo/media/apps/heroku.webp', '#3E0692', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.heroku.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', '8e9aed9c-8cd5-4117-8b69-8e0ea1920948'),
  ('Porkbun', 'https://s3.keireira.com/subsawwy-demo/media/apps/porkbun.webp', '#E27F7B', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://porkbun.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', '81d3564e-0bd6-426f-b10e-323989302c12'),
  ('Namecheap', 'https://s3.keireira.com/subsawwy-demo/media/apps/namecheap.webp', '#EA5D29', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.namecheap.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', '14bf1c8c-7ce4-4a7c-8182-82f1792c08b0'),
  ('Aeza', 'https://s3.keireira.com/subsawwy-demo/media/apps/aeza.webp', '#FEFEFE', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://aeza.net/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', '09b40d10-4059-425b-a99d-39fe168ad8ae'),
  ('Inferno Solutions', 'https://s3.keireira.com/subsawwy-demo/media/apps/inferno.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://inferno.name/en/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', 'df03830e-31e6-424e-abdc-b03508d2767f'),
  ('Digital Ocean', 'https://s3.keireira.com/subsawwy-demo/media/apps/digital-ocean.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.digitalocean.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', 'fc154ba6-a405-4d29-a85e-3ebb065bf711'),
  ('Vercel', 'https://s3.keireira.com/subsawwy-demo/media/apps/vercel.webp', '#FFFFFF', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://vercel.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', 'cfbc99f7-9db7-4205-88a2-95d6a3d83d81'),
  ('Render', 'https://s3.keireira.com/subsawwy-demo/media/apps/render.webp', '#302D30', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://render.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', '148765d3-1417-4363-b066-95d6a3d83d81'),
  ('AWS', 'https://s3.keireira.com/subsawwy-demo/media/apps/aws.webp', '#EF9E38', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://aws.amazon.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', '1355db4e-8049-46fa-ac1b-b042430d7319'),
  ('Hostkey', 'https://s3.keireira.com/subsawwy-demo/media/apps/hostkey.webp', '#C46F49', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://hostkey.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', '3a057291-2179-4f63-bdfa-d5cc8cf454e9'),
  ('Hostinger', 'https://s3.keireira.com/subsawwy-demo/media/apps/hostinger.webp', '#634EBC', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.hostinger.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', 'ee395a50-ba68-4095-8724-37a114e0183e'),
  ('Nixihost', 'https://s3.keireira.com/subsawwy-demo/media/apps/nixihost.webp', '#5C92F6', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.nixihost.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', '56769175-afce-448a-9d22-049178dfeca7'),
  ('KnownHost', 'https://s3.keireira.com/subsawwy-demo/media/apps/knownhost.webp', '#CF3C32', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.knownhost.com/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', 'd28de202-1fc8-40ca-862e-19ab1cc6006f'),
  ('Nexcess', 'https://s3.keireira.com/subsawwy-demo/media/apps/nexcess.webp', '#4FADEB', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.nexcess.net/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', 'ff56f4c7-02d4-444e-8dc1-ee0fc3abc6a0'),
  ('Zume', 'https://s3.keireira.com/subsawwy-demo/media/apps/zume.webp', '#3365F6', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://zume.net/"}'::JSONB, '69e45825-a4e0-4c19-9351-ce95a807c158', '00000000-0000-0000-0000-000000000000', '077e121c-4083-4870-aa3f-38d9fbd0d3d7'),

  -- Magazines // 05
  ('DEV', 'https://s3.keireira.com/subsawwy-demo/media/apps/dev.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://dev.to/"}'::JSONB, '8b668ab1-7b80-4143-b7be-0389529ef2e3', '00000000-0000-0000-0000-000000000000', '4964a493-3468-49d1-9f67-78f2f2d2f05a'),
  ('Medium', 'https://s3.keireira.com/subsawwy-demo/media/apps/medium.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://medium.com/"}'::JSONB, '8b668ab1-7b80-4143-b7be-0389529ef2e3', '00000000-0000-0000-0000-000000000000', '28b67b67-53c4-497e-94f4-8353e42b88df'),

  -- Utilities // 01
  ('Kagi', 'https://s3.keireira.com/subsawwy-demo/media/apps/kagi.webp', '#F3B644', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://kagi.com/"}'::JSONB, 'eaef2630-3cea-4095-8b72-40e397ec013a', '00000000-0000-0000-0000-000000000000', 'd655ec5d-6306-4b81-af49-260435f7211f'),
  ('AdGuard', 'https://s3.keireira.com/subsawwy-demo/media/apps/adguard.webp', '#68B27A', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://adguard.com/"}'::JSONB, 'eaef2630-3cea-4095-8b72-40e397ec013a', '00000000-0000-0000-0000-000000000000', 'aaf9c7ca-5205-414f-8562-fd860ca97a4f'),
  ('Proton', 'https://s3.keireira.com/subsawwy-demo/media/apps/proton.webp', '#000000', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://proton.me/"}'::JSONB, 'eaef2630-3cea-4095-8b72-40e397ec013a', '00000000-0000-0000-0000-000000000000', 'b1965185-623c-4ef7-ae85-0385355bf3e8'),
  ('Mega', 'https://s3.keireira.com/subsawwy-demo/media/apps/mega.webp', '#C93A38', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://mega.co.nz/"}'::JSONB, 'eaef2630-3cea-4095-8b72-40e397ec013a', '00000000-0000-0000-0000-000000000000', '733809e1-6134-454e-a9b2-11bbbd15db2a'),
  ('OpenSubtitles', 'https://s3.keireira.com/subsawwy-demo/media/apps/opensubtitles.webp', '#231F21', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.opensubtitles.com/"}'::JSONB, 'eaef2630-3cea-4095-8b72-40e397ec013a', '00000000-0000-0000-0000-000000000000', 'e2e640df-f4fb-4bab-93b4-585e2b7c40e3'),

  -- VPN // 02
  ('NordVPN', 'https://s3.keireira.com/subsawwy-demo/media/apps/nord-vpn.webp', '#5685F6', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://nordvpn.com/"}'::JSONB, 'ad7ebd55-5d7d-48b8-a6b1-077e4a9f7363', '00000000-0000-0000-0000-000000000000', '5ba1ca3c-da97-4aa7-a979-db2f6c0086be'),
  ('ExpressVPN', 'https://s3.keireira.com/subsawwy-demo/media/apps/express-vpn.webp', '#B73634', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://expressvpn.com/"}'::JSONB, 'ad7ebd55-5d7d-48b8-a6b1-077e4a9f7363', '00000000-0000-0000-0000-000000000000', '42b619b0-524b-44ca-96bc-f7314355b05a'),
  ('Surfshark', 'https://s3.keireira.com/subsawwy-demo/media/apps/surfshark.webp', '#3F8698', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://surfshark.com/"}'::JSONB, 'ad7ebd55-5d7d-48b8-a6b1-077e4a9f7363', '00000000-0000-0000-0000-000000000000', '932142e0-dfe7-4e2a-adb2-c3fd2b577441'),
  ('CyberGhost', 'https://s3.keireira.com/subsawwy-demo/media/apps/cyberghost.webp', '#F7CE45', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://cyberghost.com/"}'::JSONB, 'ad7ebd55-5d7d-48b8-a6b1-077e4a9f7363', '00000000-0000-0000-0000-000000000000', 'ecdb0d3e-dfc4-4e1b-9abd-31881d9cac9d'),
  ('IP Vanish', 'https://s3.keireira.com/subsawwy-demo/media/apps/ip-vanish.webp', '#80BB56', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://ipvanish.com/"}'::JSONB, 'ad7ebd55-5d7d-48b8-a6b1-077e4a9f7363', '00000000-0000-0000-0000-000000000000', '99ad9133-7f0a-4e80-90e2-4f9bdde2dc75'),
  ('Private Internet Access', 'https://s3.keireira.com/subsawwy-demo/media/apps/private-internet-access.webp', '#75A55D', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://privateinternetaccess.com/"}'::JSONB, 'ad7ebd55-5d7d-48b8-a6b1-077e4a9f7363', '00000000-0000-0000-0000-000000000000', '2924f74c-432f-41c7-bfe9-974b2458759e'),
  ('TunnelBear', 'https://s3.keireira.com/subsawwy-demo/media/apps/tunnel-bear.webp', '#D0DF96', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://tunnelbear.com/"}'::JSONB, 'ad7ebd55-5d7d-48b8-a6b1-077e4a9f7363', '00000000-0000-0000-0000-000000000000', 'c57172dc-f6fd-4b2d-a27e-34e0ab462d98'),
  ('Tailscale', 'https://s3.keireira.com/subsawwy-demo/media/apps/tailscale.webp', '#D0D0D0', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://tailscale.com/"}'::JSONB, 'ad7ebd55-5d7d-48b8-a6b1-077e4a9f7363', '00000000-0000-0000-0000-000000000000', '1c3814ea-8182-4aa6-9358-c465ec6c7cb5'),

  -- Entertainment // 03
  ('Discord', 'https://s3.keireira.com/subsawwy-demo/media/apps/discord.webp', '#5C66E2', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://discord.com/"}'::JSONB, '4b28f8df-dfaa-4c96-baa5-d7b456122009', '00000000-0000-0000-0000-000000000000', 'b5772eb7-78c0-43e6-96b4-771ad45b2416'),
  ('Twitch', 'https://s3.keireira.com/subsawwy-demo/media/apps/twitch.webp', '#8749F5', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.twitch.tv/"}'::JSONB, '4b28f8df-dfaa-4c96-baa5-d7b456122009', '00000000-0000-0000-0000-000000000000', '3b7f6eb3-a5e6-462c-bb49-b22211c5da87'),
  ('Xbox', 'https://s3.keireira.com/subsawwy-demo/media/apps/xbox.webp', '#387A26', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.xbox.com/"}'::JSONB, '4b28f8df-dfaa-4c96-baa5-d7b456122009', '00000000-0000-0000-0000-000000000000', 'b989f700-daab-4b43-8514-61218ce61124'),
  ('PSN', 'https://s3.keireira.com/subsawwy-demo/media/apps/psn.webp', '#133594', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://store.playstation.com/"}'::JSONB, '4b28f8df-dfaa-4c96-baa5-d7b456122009', '00000000-0000-0000-0000-000000000000', '87165afe-e9de-4c6f-a0f5-5601c4ac260c'),
  ('The Elder Scrolls Online', 'https://s3.keireira.com/subsawwy-demo/media/apps/teso.webp', '#8F805F', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://www.elderscrollsonline.com/"}'::JSONB, '4b28f8df-dfaa-4c96-baa5-d7b456122009', '00000000-0000-0000-0000-000000000000', 'a121c793-6c3c-4f91-aae5-64f7b5e6a03c'),

  -- Messengers // 04
  ('Telegram', 'https://s3.keireira.com/subsawwy-demo/media/apps/telegram.webp', '#50A1DE', true, false, ARRAY[]::TEXT[], '{"referral": null, "promo": null, "homepage": "https://telegram.org/"}'::JSONB, '127e3e76-bdf3-4f85-81ae-9af2ee7a0c00', '00000000-0000-0000-0000-000000000000', 'b5b2906b-18cc-4d76-9f52-d9329f211f94');
