import { useMemo } from 'react';
import * as TimSort from 'timsort';
import { useSelector } from 'react-redux';
import { fromDate, getLocalTimeZone } from '@internationalized/date';

import { subIdsByDatesSelector } from '@data/subscriptions/selectors';

const timezone = getLocalTimeZone();

const useSubIds = () => {
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

	return ids;
};

export default useSubIds;
