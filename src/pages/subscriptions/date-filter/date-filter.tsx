import React from 'react';
import { useSearch, useNavigate } from '@tanstack/react-router';

import { H3 } from '@ui';
import DateChip from './date-chip';
import Root, { Main } from './date-filter.styles';

const DateFilter = () => {
	const navigate = useNavigate();
	const search = useSearch({ from: '/_auth-guard/subscriptions' });

	const navigateTo = (key: string, value: string) => {
		navigate({
			to: '/subscriptions',
			search: { ...search, [key]: value },
			replace: true
		});
	};

	const changeFromDate = (nextDate: string) => {
		navigateTo('from', nextDate);
	};

	const changeToDate = (nextDate: string) => {
		navigateTo('to', nextDate);
	};

	return (
		<Root>
			<H3>Filters</H3>

			<Main>
				<DateChip caption="from" date={search.from} onChange={changeFromDate} />
				<DateChip caption="to" date={search.to} onChange={changeToDate} />
			</Main>
		</Root>
	);
};

export default DateFilter;
