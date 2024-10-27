import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import LogoutUnit from '@pages/auth-id/logout';

export const Route = createLazyFileRoute('/id/logout')({
	component: () => <LogoutUnit />
});
