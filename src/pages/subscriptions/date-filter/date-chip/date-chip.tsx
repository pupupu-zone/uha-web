import React, { useMemo, useRef } from 'react';

import { useLocale } from '@hooks';
import { DateFormatter } from '@internationalized/date';

import { LargeText, Text } from '@ui';
import { Button as AriaButton } from 'react-aria-components';
import Root, { Caption, Input } from './date-chip.styles';

import type { Props } from './date-chip.d';

const DateChip = ({ caption, date, onChange }: Props) => {
	const ref = useRef<HTMLInputElement>(null);
	const formatter = useFormatter();

	const formattedDate = useMemo(() => {
		if (!date) return '';

		return formatter.format(new Date(date));
	}, [date]);

	const showPicker = () => {
		try {
			ref.current?.showPicker();
		} catch {
			ref.current?.focus(); // Fallback for ios
		}
	};

	const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<Root as={AriaButton} onPress={showPicker}>
			<Caption>{caption}:</Caption>
			{date ? <Text $shade="regular">{formattedDate}</Text> : <LargeText $shade="regular">∞</LargeText>}

			<Input ref={ref} type="date" value={date} onChange={changeDate} />
		</Root>
	);
};

const useFormatter = () => {
	const locale = useLocale();

	const formatter = useMemo(() => {
		const full = new DateFormatter(locale, {
			day: '2-digit',
			month: 'short',
			year: 'numeric'
		});

		return full;
	}, [locale]);

	return formatter;
};

export default DateChip;
