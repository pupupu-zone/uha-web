import { createFileRoute, redirect } from '@tanstack/react-router';

import RegisterUnit from '@src/pages/id/register-flow/register';

export const Route = createFileRoute('/register')({
	beforeLoad: ({ context }) => {
		if (context.auth.isAuthenticated) {
			throw redirect({ to: '/subs-list' });
		}
	},
	component: RegisterUnit
});
