import React from 'react';

import RootApp from '../Root.tsx';
import { createRootRoute } from '@tanstack/react-router';

export const rootRoute = createRootRoute({
	component: () => <RootApp />
});
