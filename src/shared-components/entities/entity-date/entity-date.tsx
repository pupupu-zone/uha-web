import React from 'react';
import { I18nProvider } from 'react-aria';

import { useLocale } from '@utils/hooks';
import { parseDate } from '@internationalized/date';

import { EntityDateStyle } from './entity-date.styles';
import { DateField, DateInput, DateSegment } from 'react-aria-components';

import type { Props } from './entity-date.d';

const EntityDate = ({ isTextDark, value, onChange }: Props) => {
	const locale = useLocale();

	return (
		<>
			<I18nProvider locale={locale}>
				<DateField
					shouldForceLeadingZeros
					granularity="day"
					hideTimeZone
					value={typeof value === 'string' ? parseDate(value) : value}
					onChange={onChange}
				>
					<DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
				</DateField>

				<EntityDateStyle $isTextDark={isTextDark} />
			</I18nProvider>
		</>
	);
};

export default EntityDate;
