import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useSelector } from 'react-redux';

import useLoadSubs from './use-load-subs';

import ListView from './list-view';
import DateFilter from './date-filter';
import Root, { ViewPort } from './subscriptions.styles';

import type { SearchParams } from '@core/routes/_auth-guard/route';

type Props = SearchParams;

import { allSubsSelector } from '@data/subscriptions/selectors';
import { filteredSelector as catSelector } from '@data/categories/selectors';
import { filteredSelector as appSelector } from '@data/applications/selectors';

const useIsLoading = () => {
	const apps = useSelector(appSelector);
	const categories = useSelector(catSelector);
	const subsList = useSelector(allSubsSelector);

	return !categories.length || !apps.length || !subsList.length;
};

const Subscriptions = ({ view, action }: Props) => {
	useLoadSubs();
	const navigate = useNavigate();
	const isLoading = useIsLoading();
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
			<DateFilter />

			{isLoading && (
				<div>
					<p>Loading...</p>
				</div>
			)}

			{!isLoading && (
				<ViewPort $shouldFill={shouldFill}>
					<ListView />
				</ViewPort>
			)}
		</Root>
	);
};

export default Subscriptions;
