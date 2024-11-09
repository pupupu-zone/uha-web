import { createFileRoute, redirect, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_id/reset-password')({
	beforeLoad: (props) => {
		if (props.context.auth.isAuthenticated) {
			throw redirect({ to: '/subs-list' });
		}

		if (props.location.pathname.replaceAll('/', '') === 'reset-password') {
			throw redirect({ to: '/reset-password/init' });
		}
	},
	component: Outlet
});
