import React, { useEffect, useState, useRef } from 'react';

import ListView from './list-view';
import { useNavigate } from '@tanstack/react-router';
import CalendarView from './calendar-view';
import HeaderCard from './header-card';
import Root, { ViewPort } from './subscriptions.styles';

import type { SearchParams } from '@core/routes/_auth-guard/route';

type Props = SearchParams;

const Subscriptions = ({ view, action }: Props) => {
	const navigate = useNavigate();
	const rootRef = useRef<HTMLDivElement>(null);
	const [shouldFill, setShouldFill] = useState(false);

	useEffect(() => {
		if (view) return;

		navigate({
			to: '/subscriptions',
			search: { view: 'list', action },
			replace: true
		});
	}, []);

	useEffect(() => {
		if (!rootRef.current) return;

		const NAVBAR_HEIGHT = 72;
		const contentHeight = rootRef.current.offsetHeight;
		const viewportHeight = window.innerHeight + NAVBAR_HEIGHT;

		setShouldFill(contentHeight <= viewportHeight);
	}, [view]);

	return (
		<Root ref={rootRef}>
			<HeaderCard />

			<ViewPort $shouldFill={shouldFill}>
				{view === 'list' && <ListView />}

				{view === 'calendar' && <CalendarView />}
			</ViewPort>
		</Root>
	);
};

export default Subscriptions;
