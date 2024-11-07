import { createFileRoute, redirect } from '@tanstack/react-router';

import LoginUnit from '@src/pages/id/login-flow/login';

export const Route = createFileRoute('/login')({
	beforeLoad: ({ context, search }) => {
		if (context.auth.isAuthenticated) {
			throw redirect({ to: '/subs-list' });
		}
	},
	component: LoginUnit
});
