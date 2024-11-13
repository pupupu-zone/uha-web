import { useMemo } from 'react';
import { DateTime } from 'luxon';

import type { Props } from '../calendar.d';

const fillMonthWithDays = (month: Props['month'], year: Props['year']) => {
	if (month < 1 || month > 12) {
		throw new Error('Invalid month');
	}

	const maxDay = new Date(year, month, 0).getDate();

	// build ISO8601-compatible calendar
	const monthDays = Array.from({ length: maxDay }, (_, i) => {
		const d = `${i + 1}`.padStart(2, '0');
		const m = `${month}`.padStart(2, '0');
		const y = `${year}`;

		return DateTime.fromISO(`${y}-${m}-${d}`);
	});

	return monthDays;
};

type CalendarMonth = Record<number, (DateTime | null)[]>;

const formatDays = (monthDays: DateTime[]) => {
	const formattedDays = monthDays.reduce((acc, date) => {
		const weekday = date.weekday;
		const isNextYearWeek = date.month === 12 && date.weekNumber === 1;
		const weekNumber = isNextYearWeek ? date.weeksInWeekYear + 1 : date.weekNumber;

		if (!acc[weekNumber]) {
			acc[weekNumber] = new Array(7).fill(null);
		}

		acc[weekNumber][weekday - 1] = date;

		return acc;
	}, {} as CalendarMonth);

	return formattedDays;
};

const useFillMonth = (month: Props['month'], year: Props['year']) => {
	const filledMonth = useMemo(() => fillMonthWithDays(month, year), [month, year]);
	const formattedMonth = useMemo(() => formatDays(filledMonth), [filledMonth]);

	return formattedMonth;
};

export default useFillMonth;
