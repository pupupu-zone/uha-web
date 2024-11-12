import { createFileRoute, redirect } from '@tanstack/react-router';

import MainPage from '@pages/main';

export type SearchParams = {
	view?: 'list' | 'calendar'; // for subscriptions view
	action?: 'add' | 'edit'; // edit for subscriptions view, add for any
};

export const Route = createFileRoute('/_auth-guard')({
	beforeLoad: ({ context }) => {
		if (!context.auth.isAuthenticated) {
			throw redirect({
				to: '/login'
			});
		}
	},
	component: MainPage,
	validateSearch: (search: SearchParams) => search
});
