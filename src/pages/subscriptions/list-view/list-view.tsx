import React, { useMemo } from 'react';
import * as TimSort from 'timsort';
import { today, getLocalTimeZone, DateFormatter, fromDate } from '@internationalized/date';
import { useSelector } from 'react-redux';
import { useLocale } from '@utils/hooks';

import { subIdsByDatesSelector } from '@data/subscriptions/selectors';

import SubCard from '../sub-card';
import Root, { DateSlice, DateTitle } from './list-view.styles';

const timezone = getLocalTimeZone();
const CURRENT_YEAR = today(timezone).year;

const ListView = () => {
	const locale = useLocale();

	const [fullFormatter, shortFormatter] = useMemo(() => {
		const full = new DateFormatter(locale, {
			day: '2-digit',
			month: 'long',
			year: 'numeric'
		});

		const short = new DateFormatter(locale, {
			day: '2-digit',
			month: 'long'
		});

		return [full, short];
	}, [locale]);

	const idsByDates = useSelector(subIdsByDatesSelector);

	const ids = useMemo(() => {
		const entries = Object.entries(idsByDates);

		TimSort.sort(entries, ([a], [b]) => {
			const dateA = fromDate(new Date(a), timezone);
			const dateB = fromDate(new Date(b), timezone);

			return dateB.compare(dateA);
		});

		return entries;
	}, [idsByDates]);

	return (
		<Root>
			{ids.map(([date, ids]) => {
				const rawDate = new Date(date);
				const dateObj = fromDate(new Date(date), timezone);
				const isCurrentYear = dateObj.year === CURRENT_YEAR;

				return (
					<DateSlice key={date}>
						<DateTitle>{isCurrentYear ? shortFormatter.format(rawDate) : fullFormatter.format(rawDate)}</DateTitle>

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
