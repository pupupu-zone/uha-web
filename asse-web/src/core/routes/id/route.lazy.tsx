import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import AuthIdPage from '@pages/auth-id';

export const Route = createLazyFileRoute('/id')({
	component: () => <AuthIdPage />
});
