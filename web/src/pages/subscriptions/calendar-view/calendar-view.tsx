import React, { useMemo } from 'react';
import { DateTime, Info } from 'luxon';
import { Link, useSearch } from '@tanstack/react-router';
import HorizontalScroll from 'react-basic-horizontal-scroll';

import Root, { Titles, NavLink, Calendar, Week, Day } from './calendar-view.styles';

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

const useTitles = (month, year) => {
	const title = useMemo(() => {
		const nowDate = DateTime.now();
		const passedDate = DateTime.fromObject({ month, year });

		if (passedDate.diff(nowDate, 'months').months < -1) {
			console.error('Invalid date');

			return [];
		}

		const calcToDate = passedDate.plus({ months: 6 });
		const delta = Math.ceil(calcToDate.diff(nowDate, 'months').months);

		const dates = Array.from({ length: delta }, (_, i) => {
			return getTitle(nowDate.plus({ months: i }));
		});

		return dates;
	}, [month, year]);

	return title;
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
	const titles = useTitles(month, year);

	const formattedMonth = formatDays(monthDays);

	return (
		<Root>
			<HorizontalScroll>
				<Titles>
					{titles.map((title) => {
						const isActive = title.month === month && title.year === year;

						return (
							<Link
								key={title.title}
								style={{ opacity: isActive ? 1 : 0.5 }}
								to="/subscriptions"
								search={{
									view: 'calendar',
									month: title.month,
									year: title.year
								}}
							>
								<NavLink>{title.title}</NavLink>
							</Link>
						);
					})}
				</Titles>
			</HorizontalScroll>

			<Calendar>
				<Week>
					{Info.weekdays('short').map((day) => (
						<Day key={day} $isActiveDay={false}>
							{day}
						</Day>
					))}
				</Week>
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
			</Calendar>
		</Root>
	);
};

export default CalendarView;
