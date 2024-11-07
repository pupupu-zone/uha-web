import React from 'react';
import { createFileRoute, redirect } from '@tanstack/react-router';

import IndexPage from '@pages/main';

export const Route = createFileRoute('/app')({
	component: () => <IndexPage />,
	beforeLoad: ({ context, location }) => {
		if (context.isAuthorized) return;

		throw redirect({
			to: '/id/login'
		});
	}
});
