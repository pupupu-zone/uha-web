import React from 'react';
import { DateTime } from 'luxon';
import { useSelector } from 'react-redux';

import { subIdsByDatesSelector } from '@data/subscriptions/selectors';

import { H3 } from '@ui';
import SubCard from '../sub-card';
import Root from './list-view.styles';

const CURRENT_YEAR = DateTime.now().year;

const isCurrentYear = (date: DateTime) => {
	return date.year === CURRENT_YEAR;
};

const ListView = () => {
	const idsByDates = useSelector(subIdsByDatesSelector);

	return (
		<Root>
			{Object.entries(idsByDates).map(([date, ids]) => {
				const luxonDate = DateTime.fromISO(date);
				const isCurrent = isCurrentYear(luxonDate);

				return (
					<div key={date}>
						<H3>{luxonDate.toFormat(isCurrent ? 'dd MMMM' : 'dd MMMM yyyy')}</H3>

						{ids.map((id) => (
							<SubCard key={id} id={id} />
						))}
					</div>
				);
			})}
		</Root>
	);
};

export default ListView;
