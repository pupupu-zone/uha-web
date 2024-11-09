import { createFileRoute, redirect } from '@tanstack/react-router';

import MainPage from '@pages/main';

export const Route = createFileRoute('/_auth-guard')({
	beforeLoad: ({ context }) => {
		if (!context.auth.isAuthenticated) {
			throw redirect({
				to: '/login'
			});
		}
	},
	component: MainPage
});
