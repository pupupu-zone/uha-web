import React from 'react';

import { createFileRoute, redirect } from '@tanstack/react-router';

import ProfilePage from '@pages/profile';

export const Route = createFileRoute('/app/profile')({
	component: () => <ProfilePage />,
	beforeLoad: ({ context, location }) => {
		if (context.isAuthorized) return;

		throw redirect({
			to: '/id'
		});
	}
});
