import React, { useEffect } from 'react';

import ListView from './list-view';
import { useNavigate, useSearch } from '@tanstack/react-router';
import CalendarView from './calendar-view';
import HeaderCard from './header-card';
import Root, { ViewPort } from './subscriptions.styles';

const Subscriptions = () => {
	const navigate = useNavigate();
	const { view } = useSearch({ from: '/_auth-guard/subscriptions' });

	useEffect(() => {
		if (view) return;

		navigate({
			to: '/subscriptions',
			search: { view: 'list' },
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
