--
-- REMOVE INITIAL DATA IN REVERSE ORDER
--

-- First remove applications as they depend on categories
DELETE FROM "applications" WHERE "is_default" = true;

-- Then remove default categories
DELETE FROM "categories" WHERE "is_default" = true;

-- If you need to be more specific, you can also delete by known IDs:

-- Delete applications by their specific IDs
DELETE FROM "applications" WHERE "id" IN (
    'e7cf4cf3-3622-478f-b8bb-c3e0441d66cd', -- Wolt+
    'a69611fb-cae9-4ac8-b164-684b08eadf87', -- Glovo Prime
    'a3e52330-c5a2-4b21-870a-f1f91f2644fc', -- Patreon
    '405365d2-7a64-4b72-8271-9e2111184f5a', -- Boosty
    'a49907a8-d8db-48be-aae2-1c23cb184dfb', -- OnlyFans
    'a935cf29-d6d3-4e94-bbb6-18a368ed8583', -- SubscribeStar
    '0c495fa5-a0aa-49a9-b0f1-53d4526791d4', -- Spotify
    '83880822-37e0-497d-b884-37639761a7d2', -- Deezer
    'b0f42b43-f913-440e-8190-d12d13a40b2a', -- Apple Music
    'e9051364-17a2-436b-8ccc-1e49c4a83f40', -- Tidal
    'c0111163-3f8c-49eb-9bdd-29450db92528', -- Yandex.Plus
    '4dca8fac-bb24-4bc4-aecc-733fc102019b', -- YouTube Premium
    '328e683a-f2ae-4c53-adc6-c15efc378af3', -- Amazon Prime
    'c8bc3184-2a11-4a5e-a2b0-49ab1a2872f8', -- Google One
    '75001b25-12e8-409d-85bd-093a9a53f36a', -- Apple One
    '62f3a215-1310-4e56-a63a-2c70012a2427', -- Netflix
    '8c01d523-c341-443a-8ceb-f49f6c5dc213', -- Hulu
    '84f436c0-d247-47f8-812b-fef9496c5b24', -- HBO Max
    '761a216f-8ced-4121-9cf8-104021a66671', -- Apple TV+
    '4338b59d-424d-41a9-850b-b5b7769ee325', -- Disney+
    'c0bf89cc-daa6-4058-8833-5130273d8dfc', -- Paramount+
    '60479599-a9c6-4279-92f3-d7298f40d517', -- Discovery+
    'f93d1086-0b57-4a81-b5fd-99bc8eb0bd7a', -- Curiosity Stream
    '4d2f19e9-ca73-407b-b787-e829fb81c2ac', -- Crunchyroll
    'e5fc6da8-19d1-43c6-b6e2-6575efa44dcb', -- NOW
    '20474a89-0cbd-4709-bd3c-27ffde412d19', -- Иви
    'e46f707e-5087-4cf3-b45f-65778fca95cc', -- Кинопоиск
    'f2f4143c-697a-4533-93b0-b306baaf1ee8', -- Okko
    'c6f1f309-cafe-43fd-8609-a7375e67da65', -- Anime365
    '9db0d6dc-22e7-4c2a-96d7-001dfacf21ca', -- Adobe
    'dc920e8f-0288-4f8d-8157-9783ffd66b8e', -- Sketch
    '588b756d-1900-434a-92c0-f44eb3e8c95e', -- Maxon
    '937bda83-5f12-49e1-96ea-4a6909375e0c', -- Coursehunter
    'f18174ea-dacf-4fba-82dc-3451ae55923c', -- Coursetrain
    '4b62f62a-f2e5-4638-ad99-28a570dd8c25', -- ChatGPT
    '0663cb97-1f33-4e60-9d36-53f8dea57d77', -- Claude
    'ecbc5168-f1c7-4b35-a723-27e9991a1191', -- GitHub
    '13bc4005-4c72-45c6-9033-0f2b5972b1c1', -- GitKraken
    'cdc226f5-189e-4cc2-9c2c-cb796637c308', -- Warp
    'f32d1877-0e4d-4355-9ea0-464deef4f06f', -- Vultr
    '87b0a63f-db31-4c5b-8ed0-fa23a05590a8', -- Linode
    '8e9aed9c-8cd5-4117-8b69-8e0ea1920948', -- Heroku
    '81d3564e-0bd6-426f-b10e-323989302c12', -- Porkbun
    '14bf1c8c-7ce4-4a7c-8182-82f1792c08b0', -- Namecheap
    '09b40d10-4059-425b-a99d-39fe168ad8ae', -- Aeza
    'df03830e-31e6-424e-abdc-b03508d2767f', -- Inferno Solutions
    'fc154ba6-a405-4d29-a85e-3ebb065bf711', -- Digital Ocean
    'cfbc99f7-9db7-4205-88a2-95d6a3d83d81', -- Vercel
    '148765d3-1417-4363-b066-95d6a3d83d81', -- Render
    '1355db4e-8049-46fa-ac1b-b042430d7319', -- AWS
    '3a057291-2179-4f63-bdfa-d5cc8cf454e9', -- Hostkey
    'ee395a50-ba68-4095-8724-37a114e0183e', -- Hostinger
    '56769175-afce-448a-9d22-049178dfeca7', -- Nixihost
    'd28de202-1fc8-40ca-862e-19ab1cc6006f', -- KnownHost
    'ff56f4c7-02d4-444e-8dc1-ee0fc3abc6a0', -- Nexcess
    '077e121c-4083-4870-aa3f-38d9fbd0d3d7', -- Zume
    '4964a493-3468-49d1-9f67-78f2f2d2f05a', -- DEV
    '28b67b67-53c4-497e-94f4-8353e42b88df', -- Medium
    'd655ec5d-6306-4b81-af49-260435f7211f', -- Kagi
    'aaf9c7ca-5205-414f-8562-fd860ca97a4f', -- AdGuard
    'b1965185-623c-4ef7-ae85-0385355bf3e8', -- Proton
    '733809e1-6134-454e-a9b2-11bbbd15db2a', -- Mega
    'e2e640df-f4fb-4bab-93b4-585e2b7c40e3', -- OpenSubtitles
    '5ba1ca3c-da97-4aa7-a979-db2f6c0086be', -- NordVPN
    '42b619b0-524b-44ca-96bc-f7314355b05a', -- ExpressVPN
    '932142e0-dfe7-4e2a-adb2-c3fd2b577441', -- Surfshark
    'ecdb0d3e-dfc4-4e1b-9abd-31881d9cac9d', -- CyberGhost
    '99ad9133-7f0a-4e80-90e2-4f9bdde2dc75', -- IP Vanish
    '2924f74c-432f-41c7-bfe9-974b2458759e', -- PIA
    'c57172dc-f6fd-4b2d-a27e-34e0ab462d98', -- TunnelBear
    '1c3814ea-8182-4aa6-9358-c465ec6c7cb5', -- Tailscale
    'b5772eb7-78c0-43e6-96b4-771ad45b2416', -- Discord
    '3b7f6eb3-a5e6-462c-bb49-b22211c5da87', -- Twitch
    'b989f700-daab-4b43-8514-61218ce61124', -- Xbox
    '87165afe-e9de-4c6f-a0f5-5601c4ac260c', -- PSN
    'a121c793-6c3c-4f91-aae5-64f7b5e6a03c', -- TESO
    'b5b2906b-18cc-4d76-9f52-d9329f211f94'  -- Telegram
);

-- Delete categories by their specific IDs
DELETE FROM "categories" WHERE "id" IN (
    'eaef2630-3cea-4095-8b72-40e397ec013a', -- Utilities
    'ad7ebd55-5d7d-48b8-a6b1-077e4a9f7363', -- VPN
    '4b28f8df-dfaa-4c96-baa5-d7b456122009', -- Entertainment
    '127e3e76-bdf3-4f85-81ae-9af2ee7a0c00', -- Messengers
    '8b668ab1-7b80-4143-b7be-0389529ef2e3', -- Magazines
    'db03adff-a6fc-4d8d-b4c1-39e8600a9655', -- For Developers
    '680f0da2-d9b0-4f79-8809-347f2923a492', -- Robotics
    '69e45825-a4e0-4c19-9351-ce95a807c158', -- Hosting+
    'bc6238e6-1555-4320-9d33-0b2835313792', -- Education
    'a5e9a997-ce4c-4751-a9ba-96f3ec7029d4', -- Creativity
    '28167422-c5d1-4708-807a-6a6af4c56198', -- Video
    'c36f2f16-01e0-4ae7-b72d-596af02424f5', -- Music
    '57e2fa37-b6ba-4340-a8f1-ef431612bf08', -- Monetization Platforms
    '984a7596-7b60-4584-8343-a1d018c0d458', -- Food
    '14c572bd-c4a6-4b85-9553-c5939226f75f', -- Many-in-One
    'ff3671b4-8924-40bc-a910-507d92fa2e88'  -- Other
);