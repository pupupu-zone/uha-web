import { createFileRoute, redirect } from '@tanstack/react-router';
import { DateTime } from 'luxon';

import MainPage from '@pages/main';

export type SearchParams = {
	view?: 'list' | 'calendar'; // for subscriptions view
	action?: 'add' | 'edit'; // edit for subscriptions view, add for any

	month?: string | number; // for calendar view
	year?: string | number; // for calendar view
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
	validateSearch: (search: SearchParams) => {
		if ('month' in search) {
			search.month = Number.parseInt(search.month as string, 10);
		}

		if ('year' in search) {
			search.year = Number.parseInt(search.year as string, 10);
		}

		if (search.view === 'calendar') {
			const now = DateTime.now();

			if (!search.month) search.month = now.month;
			if (!search.year) search.year = now.year;
		}

		return search;
	}
});
