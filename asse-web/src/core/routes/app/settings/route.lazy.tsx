import React from 'react';

import { createLazyFileRoute } from '@tanstack/react-router';

import SettingsPage from '@pages/settings';

export const Route = createLazyFileRoute('/app/settings')({
	component: () => <SettingsPage />
});
