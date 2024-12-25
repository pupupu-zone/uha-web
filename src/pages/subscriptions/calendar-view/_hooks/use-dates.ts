import { useMemo } from 'react';
import { DateTime } from 'luxon';

type Month = string | number;
type Year = string | number;

export const getNextDate = (month?: Month, year?: Year) => {
	const nextDate = DateTime.fromObject({ month, year }).plus({ months: 1 });

	return {
		month: nextDate.month,
		year: nextDate.year
	};
};

export const getPrevDate = (month?: Month, year?: Year) => {
	const prevDate = DateTime.fromObject({ month, year }).minus({ months: 1 });

	return {
		month: prevDate.month,
		year: prevDate.year
	};
};

const getParsedDate = (month?: Month, year?: Year) => ({
	month: Number.parseInt(`${month}`, 10),
	year: Number.parseInt(`${year}`, 10)
});

const useDates = (month?: Month, year?: Year) => {
	const next = useMemo(() => getNextDate(month, year), [month, year]);
	const prev = useMemo(() => getPrevDate(month, year), [month, year]);
	const parsed = useMemo(() => getParsedDate(month, year), [month, year]);

	return { next, prev, parsed };
};

export default useDates;
