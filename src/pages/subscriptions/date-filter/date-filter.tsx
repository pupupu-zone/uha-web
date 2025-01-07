import React, { useMemo, useState } from 'react';
import { parseDate } from '@internationalized/date';
import { I18nProvider } from 'react-aria';

import { useLocale } from '@utils/hooks';
import { getRouteApi } from '@tanstack/react-router';

import { DateInput, DateRangePicker, DateSegment, Group } from 'react-aria-components';
import Root, { DateFilterStyles } from './date-filter.styles';

import type { CalendarDate } from '@internationalized/date';

const useSearch = () => {
	const route = useMemo(() => {
		return getRouteApi('/_auth-guard/subscriptions');
	}, []);

	const searchParams = route.useSearch();

	return searchParams;
};

const DateFilter = () => {
	const locale = useLocale();
	const search = useSearch();
	const [from, setFrom] = useState(parseDate(search.from || ''));
	const [to, setTo] = useState(parseDate(search.to || ''));

	const onDatesChange = ({ start, end }: Record<string, CalendarDate>) => {
		setFrom(start);
		setTo(end);
	};

	return (
		<Root>
			<I18nProvider locale={locale}>
				<DateRangePicker
					value={{ start: from, end: to }}
					// @ts-ignore
					onChange={onDatesChange}
					shouldForceLeadingZeros
					granularity="day"
					hideTimeZone
				>
					<Group>
						From: <DateInput slot="start">{(segment) => <DateSegment segment={segment} />}</DateInput>
						To: <DateInput slot="end">{(segment) => <DateSegment segment={segment} />}</DateInput>
					</Group>
				</DateRangePicker>
			</I18nProvider>

			<DateFilterStyles />
		</Root>
	);
};

export default DateFilter;
