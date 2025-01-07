import React from 'react';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { today, getLocalTimeZone, parseDate } from '@internationalized/date';

import MainPage from '@pages/main';

export type SearchParams = {
	view?: 'list' | 'calendar'; // for subscriptions view
	action?: 'add' | 'edit'; // edit for subscriptions view, add for any
	from?: string; // ISO8601
	to?: string; // ISO8601
};

const timezone = getLocalTimeZone();

export const Route = createFileRoute('/_auth-guard')({
	beforeLoad: ({ context }) => {
		if (!context.auth.isAuthenticated) {
			throw redirect({
				to: '/login'
			});
		}
	},
	component: () => <IndexPage />,
	validateSearch: (search: SearchParams) => {
		if (!('from' in search)) {
			search.from = today(timezone).toString();
		}

		if (!('to' in search) && search.from) {
			search.to = parseDate(search.from).add({ months: 3 }).toString();
		}

		return search;
	}
});

const IndexPage = () => {
	const { action } = Route.useSearch();

	return <MainPage action={action} />;
};
