import React, { useMemo } from 'react';
import { DateTime, Info } from 'luxon';
import { Link, useSearch } from '@tanstack/react-router';

import { H1, ScrollArea } from '@ui';
import Root, { Titles, Calendar, Week, Day, WeekDay, WeekDays, CalendarBody } from './calendar-view.styles';

// pass months before and after today
// month starts with 1 for our purposes
const useGenerateYearCalendar = (month, year) => {
	return useMemo(() => {
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
	}, [month, year]);
};

const nowDate = DateTime.now();

const getTitle = (date: DateTime) => {
	return {
		month: date.month,
		year: date.year,
		title: date.year === nowDate.year ? date.toFormat('LLLL') : date.toFormat('LLLL yyyy')
	};
};

const formatDays = (monthDays: DateTime[]) => {
	const month = {};

	monthDays.forEach((date) => {
		const weekday = date.weekday;
		const isNextYearWeek = date.month === 12 && date.weekNumber === 1;
		const weekNumber = isNextYearWeek ? date.weeksInWeekYear + 1 : date.weekNumber;

		if (!month[weekNumber]) {
			month[weekNumber] = new Array(7).fill(null);
		}

		month[weekNumber][weekday - 1] = date;
	});

	return month;
};

const CalendarView = () => {
	const { month, year, day: searchDay } = useSearch({ from: '/_auth-guard/subscriptions' });
	const monthDays = useGenerateYearCalendar(month, year);
	const title = getTitle(DateTime.fromObject({ month, year }));

	const formattedMonth = formatDays(monthDays);

	return (
		<Root>
			<Titles>
				<H1>{title.title}</H1>
			</Titles>

			<Calendar>
				<WeekDays>
					{Info.weekdays('short').map((day) => (
						<WeekDay key={day}>{day}</WeekDay>
					))}
				</WeekDays>

				<ScrollArea>
					<CalendarBody>
						{Object.entries(formattedMonth).map(([week, dates]) => {
							return (
								<Week key={week}>
									{dates.map((date, index) => {
										if (date) {
											return (
												<Link
													key={date.toISODate()}
													to="/subscriptions"
													search={{
														view: 'calendar',
														month: date.month,
														year: date.year,
														day: date.day
													}}
												>
													<Day $isActiveDay={searchDay === date.day}>{date.toFormat('d')}</Day>
												</Link>
											);
										}

										return <Day key={index} />;
									})}
								</Week>
							);
						})}
					</CalendarBody>
				</ScrollArea>
			</Calendar>
		</Root>
	);
};

export default CalendarView;
