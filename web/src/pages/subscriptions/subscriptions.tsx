import React, { useEffect } from 'react';

import ListView from './list-view';
import { useNavigate } from '@tanstack/react-router';
import CalendarView from './calendar-view';
import HeaderCard from './header-card';
import Root, { ViewPort } from './subscriptions.styles';

import type { SearchParams } from '@core/routes/_auth-guard/route';

type Props = SearchParams;

const Subscriptions = ({ view, action }: Props) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (view) return;

		navigate({
			to: '/subscriptions',
			search: { view: 'list', action },
			replace: true
		});
	}, []);

	return (
		<Root>
			<HeaderCard />

			<ViewPort>
				{view === 'list' && <ListView />}

				{view === 'calendar' && <CalendarView />}
			</ViewPort>
		</Root>
	);
};

export default Subscriptions;
