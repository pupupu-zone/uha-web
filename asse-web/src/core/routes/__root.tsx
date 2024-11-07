import * as React from 'react';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

import type { AuthContext } from '@core/auth';

type RouterContext = {
	auth: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
	component: () => (
		<>
			<Outlet />

			{import.meta.env.DEV && <TanStackRouterDevtools initialIsOpen={false} position="top-right" />}
		</>
	)
});
