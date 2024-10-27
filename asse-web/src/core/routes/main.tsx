import React from 'react';
import { createRoute } from '@tanstack/react-router';
import MainPage from '@pages/main';

import { rootRoute } from './root.tsx';

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: () => <MainPage />
});

export default indexRoute;
