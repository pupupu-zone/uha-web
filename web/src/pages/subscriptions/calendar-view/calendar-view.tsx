import React, { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { useSearch } from '@tanstack/react-router';
import { useDates } from './_hooks';

import { H1 } from '@ui';
import SubCard from '../sub-card';
import Calendar from './calendar';
import Root, { SubsOfTheDay, DaySubscriptions, CalendarWrapper } from './calendar-view.styles';

import stubs from '../stubs';

const CalendarView = () => {
	const { month, year } = useSearch({ from: '/_auth-guard/subscriptions' });
	const [innerMonth, setInnerMonth] = useState(month);
	const [innerYear, setInnerYear] = useState(year);
	const dates = useDates(innerMonth, innerYear);

	const changeDate = (month, year) => {
		setInnerMonth(month);
		setInnerYear(year);
	};

	const bind = useDrag(
		({ active, movement: [mx], direction: [xDir], cancel, canceled, velocity: [vx], currentTarget }) => {
			if (active || canceled) return;

			const swipeThreshold = (currentTarget as HTMLDivElement).clientWidth / 2;
			const isSwipeLeft = mx < swipeThreshold && xDir < 0 && vx > 0.3;
			const isSwipeRight = mx > -swipeThreshold && xDir > 0 && vx > 0.3;

			if (isSwipeRight) {
				changeDate(dates.prev.month, dates.prev.year);

				cancel();
			}

			if (isSwipeLeft) {
				changeDate(dates.next.month, dates.next.year);

				cancel();
			}
		}
	);

	return (
		<Root>
			<CalendarWrapper {...bind()}>
				<Calendar month={dates.parsed.month} year={dates.parsed.year} changeDate={changeDate} />
			</CalendarWrapper>

			<SubsOfTheDay>
				<H1>Subscriptions</H1>

				<DaySubscriptions>
					{stubs.map((stub) => {
						return <SubCard key={stub.country} imgSrc={stub.flag} title={stub.country} price={stub.price} />;
					})}
				</DaySubscriptions>
			</SubsOfTheDay>
		</Root>
	);
};

export default CalendarView;
