import React from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

import LoginUnit from '@pages/id/login';

export const Route = createLazyFileRoute('/id/login')({
	component: () => <LoginUnit />
});
