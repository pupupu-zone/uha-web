import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import TokenRegenerator from '@pages/id/new-token';

export const Route = createLazyFileRoute('/id/new-token')({
	component: () => <TokenRegenerator />
});
