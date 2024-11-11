import React, { useEffect } from 'react';

import ListView from './list-view';
import { Link, useNavigate, useSearch } from '@tanstack/react-router';
import CalendarView from './calendar-view';
import HeaderCard from './header-card';
import Root, { ViewPicker, LinkTo, ViewPort } from './subscriptions.styles';

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

			{/* <ViewPicker>
				<LinkTo as={Link} to="/subscriptions" search={{ view: 'list' }}>
					List
				</LinkTo>

				<LinkTo as={Link} to="/subscriptions" search={{ view: 'calendar' }}>
					Calendar
				</LinkTo>
			</ViewPicker> */}

			<ViewPort>
				{view === 'list' && <ListView />}

				{view === 'calendar' && <CalendarView />}
			</ViewPort>
		</Root>
	);
};

export default Subscriptions;
