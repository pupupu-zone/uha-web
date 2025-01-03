import { createFileRoute, redirect } from '@tanstack/react-router';

import { LoginPage } from '@src/pages/auth-flows/login-flow';

export const Route = createFileRoute('/_id/login')({
	beforeLoad: ({ context }) => {
		if (context.auth.isAuthenticated) {
			throw redirect({ to: '/subscriptions' });
		}
	},
	component: LoginPage
});
