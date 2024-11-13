import React from 'react';
import { Info } from 'luxon';
import { useFillMonth, useTitle } from './_hooks';

import { Link, useSearch } from '@tanstack/react-router';
import Root, { Title, WeekDays, WeekDay, Weeks, Week, Day } from './calendar.styles';

import type { Props } from './calendar.d';

const Calendar = ({ month, year, ...restProps }: Props) => {
	const search = useSearch({ from: '/_auth-guard/subscriptions' });
	const filledMonth = useFillMonth(month, year);
	const title = useTitle(month, year);

	return (
		<Root {...restProps}>
			<Title>{title}</Title>

			<WeekDays>
				{Info.weekdays('short').map((day) => (
					<WeekDay key={day}>{day}</WeekDay>
				))}
			</WeekDays>

			<Weeks>
				{Object.entries(filledMonth).map(([week, dates]) => {
					return (
						<Week key={week}>
							{dates.map((date, index) => {
								if (!date) {
									return <Day key={`${week}-${index}`} $isActiveDay={false} $isDisabled />;
								}

								const isActiveYear = search.year === date.year;
								const isActiveMonth = search.month === date.month;
								const isActiveDay = search.day === date.day;

								return (
									<Link
										key={`${week}-${index}`}
										to="/subscriptions"
										search={{
											view: 'calendar',
											month: date.month,
											year: date.year,
											day: date.day
										}}
									>
										<Day $isActiveDay={isActiveDay && isActiveMonth && isActiveYear} $isDisabled={false}>
											{date.toFormat('d')}
										</Day>
									</Link>
								);
							})}
						</Week>
					);
				})}
			</Weeks>
		</Root>
	);
};

export default Calendar;
