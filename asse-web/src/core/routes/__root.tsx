import * as React from 'react';
import { createRootRoute } from '@tanstack/react-router';

import RootApp from '../Root.tsx';

export const Route = createRootRoute({
	component: () => <RootApp />
});
