import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import { useSelector } from 'react-redux';

import { subIdsByDatesSelector } from '@data/subscriptions/selectors';

import SubCard from '../sub-card';
import Root, { DateSlice, DateTitle } from './list-view.styles';

const CURRENT_YEAR = DateTime.now().year;

const isCurrentYear = (date: DateTime) => {
	return date.year === CURRENT_YEAR;
};

const ListView = () => {
	const idsByDates = useSelector(subIdsByDatesSelector);
	const ids = useMemo(() => {
		const entries = Object.entries(idsByDates);

		const reversed = [...entries].reverse();

		return reversed;
	}, [idsByDates]);

	return (
		<Root>
			{ids.map(([date, ids]) => {
				const luxonDate = DateTime.fromISO(date);
				const isCurrent = isCurrentYear(luxonDate);

				return (
					<DateSlice key={date}>
						<DateTitle>{luxonDate.toFormat(isCurrent ? 'dd MMMM' : 'dd MMMM yyyy')}</DateTitle>

						{ids.map((id) => (
							<SubCard key={id} id={id} />
						))}
					</DateSlice>
				);
			})}
		</Root>
	);
};

export default ListView;
