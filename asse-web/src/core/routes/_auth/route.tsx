import { createFileRoute, redirect } from '@tanstack/react-router';

import MainPage from '@pages/main';

export const Route = createFileRoute('/_auth')({
	beforeLoad: ({ context }) => {
		if (!context.auth.isAuthenticated) {
			throw redirect({
				to: '/login'
			});
		}
	},
	component: MainPage
});
