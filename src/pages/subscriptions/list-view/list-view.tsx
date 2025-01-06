import React from 'react';
import { today, getLocalTimeZone, fromDate } from '@internationalized/date';

import { useFormatters, useSubIds } from './_hooks';

import SubscriptionCard from '../subscription-card';
import Root, { DateSlice, DateTitle } from './list-view.styles';

const timezone = getLocalTimeZone();
const CURRENT_YEAR = today(timezone).year;

const ListView = () => {
	const subIds = useSubIds();
	const [full, short] = useFormatters();

	return (
		<Root>
			{subIds.map(([date, ids]) => {
				const rawDate = new Date(date);
				const dateObj = fromDate(new Date(date), timezone);
				const formattedDate = dateObj.year === CURRENT_YEAR ? short.format(rawDate) : full.format(rawDate);

				return (
					<DateSlice key={date}>
						<DateTitle>{formattedDate}</DateTitle>

						{ids.map((id) => (
							<SubscriptionCard key={id} id={id} />
						))}
					</DateSlice>
				);
			})}
		</Root>
	);
};

export default ListView;
