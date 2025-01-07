import React, { useMemo, useRef } from 'react';
import { UAParser } from 'ua-parser-js';

import { useLocale } from '@hooks';
import { DateFormatter } from '@internationalized/date';

import { LargeText, Text } from '@ui';
import { Button as AriaButton } from 'react-aria-components';
import Root, { Caption, Input, CrippledInput } from './date-chip.styles';

import type { Props } from './date-chip.d';

const DateChip = ({ caption, date, onChange }: Props) => {
	const ref = useRef<HTMLInputElement>(null);
	const formatter = useFormatter();

	const formattedDate = useMemo(() => {
		if (!date) return '';

		return formatter.format(new Date(date));
	}, [date]);

	const isCrippled = useMemo(() => {
		const ua = UAParser(window.navigator.userAgent);

		return ua.device.is('mobile') && ua.os.is('ios');
	}, []);

	const showPicker = () => {
		ref.current?.showPicker();
	};

	const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	if (isCrippled) {
		return (
			<Root>
				<Caption>{caption}:</Caption>
				<CrippledInput ref={ref} type="date" value={date} onChange={changeDate} />
			</Root>
		);
	}

	return (
		<Root as={AriaButton} onPress={showPicker}>
			<Caption>{caption}:</Caption>
			{date ? <Text $shade="regular">{formattedDate}</Text> : <LargeText $shade="regular">∞</LargeText>}

			<Input ref={ref} aria-hidden="true" tabIndex={-1} type="date" value={date} onChange={changeDate} />
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
