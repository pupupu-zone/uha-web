import React from 'react';
import { useSelector } from 'react-redux';

import { selectors as settingsSelectors } from '@data/settings';

import { useRecalc, useDefault } from './_hooks';

import { Select } from '@ui';
import { SettingsBlock } from '@pages/profile/_components';
import { SettingsEntry, LeftEntry, RightEntry } from './general.styles';

const CURRENCY_LABELS = {
	KZT: 'Tenge',
	RUB: 'Roubles',
	USD: 'US Dollars',
	EUR: 'Euro'
};

const CURRENCIES = [
	{ value: 'KZT', label: CURRENCY_LABELS.KZT },
	{ value: 'RUB', label: CURRENCY_LABELS.RUB },
	{ value: 'USD', label: CURRENCY_LABELS.USD },
	{ value: 'EUR', label: CURRENCY_LABELS.EUR }
];

const General = () => {
	const settings = useSelector(settingsSelectors.settingsSelector);
	const recalcCur = useRecalc();
	const defaultCur = useDefault();

	const recalcView = CURRENCIES.find((currency) => currency.value === settings.recalc_currency);
	const defaultView = CURRENCIES.find((currency) => currency.value === settings.default_currency);

	return (
		<SettingsBlock title="Currencies">
			<SettingsEntry onPress={recalcCur.open}>
				<LeftEntry>Recalc Currency</LeftEntry>

				<RightEntry>{recalcView?.label}</RightEntry>
			</SettingsEntry>

			<SettingsEntry onPress={defaultCur.open}>
				<LeftEntry>Default Currency</LeftEntry>

				<RightEntry>{defaultView?.label}</RightEntry>
			</SettingsEntry>

			{recalcCur.isOpen && <Select values={CURRENCIES} close={recalcCur.close} onSelect={recalcCur.select} />}
			{defaultCur.isOpen && <Select values={CURRENCIES} close={defaultCur.close} onSelect={defaultCur.select} />}
		</SettingsBlock>
	);
};

export default General;
