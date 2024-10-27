import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import AuthIdPage from '@pages/id';

export const Route = createLazyFileRoute('/id')({
	component: () => <AuthIdPage />
});
