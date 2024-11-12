import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import { Link, useSearch } from '@tanstack/react-router';
import HorizontalScroll from 'react-basic-horizontal-scroll';

import Root, { Titles, NavLink } from './calendar-view.styles';

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
		const passedDate = DateTime.fromObject({ year, month });

		const dates = Array.from({ length: 12 }, (_, i) => {
			return getTitle(passedDate.plus({ months: i }));
		});

		return dates;
	}, [month, year]);

	return title;
};

const CalendarView = () => {
	const { month, year } = useSearch({ from: '/_auth-guard/subscriptions' });
	const monthDays = useGenerateYearCalendar(month, year);
	const titles = useTitles(month, year);

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

			{monthDays.map((date) => {
				return <div key={date.toISODate()}>{date.toFormat('d')}</div>;
			})}
		</Root>
	);
};

export default CalendarView;
