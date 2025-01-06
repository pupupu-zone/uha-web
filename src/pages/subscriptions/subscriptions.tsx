import React, { useEffect, useState, useRef } from 'react';

import useLoadSubs from './use-load-subs';
import ListView from './list-view';
import { useNavigate } from '@tanstack/react-router';
import InfographCard from './infograph-card';
import Root, { ViewPort } from './subscriptions.styles';

import type { SearchParams } from '@core/routes/_auth-guard/route';

type Props = SearchParams;

import { allSubsSelector } from '@data/subscriptions/selectors';
import { filteredSelector as catSelector } from '@data/categories/selectors';
import { filteredSelector as appSelector } from '@data/applications/selectors';
import { useSelector } from 'react-redux';
const useIsLoading = () => {
	const categories = useSelector(catSelector);
	const apps = useSelector(appSelector);
	const subsList = useSelector(allSubsSelector);

	return !categories.length || !apps.length || !subsList.length;
};

const Subscriptions = ({ view, action }: Props) => {
	useLoadSubs();
	const navigate = useNavigate();
	const rootRef = useRef<HTMLDivElement>(null);
	const [shouldFill, setShouldFill] = useState(false);

	const isLoading = useIsLoading();

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
			<InfographCard />

			{isLoading && (
				<div>
					<p>Loading...</p>
				</div>
			)}

			{!isLoading && <ViewPort $shouldFill={shouldFill}>{view === 'list' && <ListView />}</ViewPort>}
		</Root>
	);
};

export default Subscriptions;
