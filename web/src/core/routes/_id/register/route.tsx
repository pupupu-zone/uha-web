import { createFileRoute, redirect, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_id/register')({
	beforeLoad: (props) => {
		if (props.context.auth.isAuthenticated) {
			throw redirect({ to: '/subs-list' });
		}

		if (props.location.pathname.replaceAll('/', '') === 'register') {
			throw redirect({ to: '/register/init' });
		}
	},
	component: Outlet
});
