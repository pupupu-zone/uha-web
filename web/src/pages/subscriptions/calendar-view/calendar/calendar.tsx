import React from 'react';
import { Info } from 'luxon';
import { useFillMonth, useTitle } from './_hooks';

import { useDates } from '../_hooks';

import { Icon } from '@ui';
import { Link, useSearch } from '@tanstack/react-router';
import Root, { TitleButton, Title, WeekDays, WeekDay, Weeks, Week, Day } from './calendar.styles';

import type { Props } from './calendar.d';

const Calendar = ({ month, year, changeDate, ...restProps }: Props) => {
	const dates = useDates(month, year);
	const search = useSearch({ from: '/_auth-guard/subscriptions' });
	const filledMonth = useFillMonth(month, year);
	const title = useTitle(month, year);

	return (
		<Root {...restProps}>
			<Title>
				<TitleButton onPress={() => changeDate(dates.prev.month, dates.prev.year)}>
					<Icon name="arrow-left" width={24} height={24} />
				</TitleButton>

				{title}

				<TitleButton onPress={() => changeDate(dates.next.month, dates.next.year)}>
					<Icon name="arrow-right" width={24} height={24} />
				</TitleButton>
			</Title>

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
