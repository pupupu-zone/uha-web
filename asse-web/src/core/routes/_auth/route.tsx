import { createFileRoute, redirect } from '@tanstack/react-router';

import IndexPage from '@pages/main';

export const Route = createFileRoute('/_auth')({
	beforeLoad: ({ context, location }) => {
		if (!context.auth.isAuthenticated) {
			throw redirect({
				to: '/login'
			});
		}
	},
	component: IndexPage
});
