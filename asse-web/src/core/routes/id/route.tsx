import React from 'react';
import { createFileRoute, redirect } from '@tanstack/react-router';

import AuthIdPage from '@pages/id';

export const Route = createFileRoute('/id')({
	component: () => <AuthIdPage />,
	beforeLoad: ({ context, location }) => {
		if (context.isAuthorized) {
			throw redirect({
				to: '/app'
			});
		}

		throw redirect({
			to: '/id/login'
		});
	}
});
