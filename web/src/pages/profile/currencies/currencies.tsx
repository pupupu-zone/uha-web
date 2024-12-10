import React from 'react';
import { useSelector } from 'react-redux';

import { selectors as settingsSelectors } from '@data/settings';

import { useRecalc, useDefault } from './_hooks';

import { Select } from '@ui';
import { SettingsBlock, SettingsEntry } from '@pages/profile/_components';

const CURRENCIES = [
	{ value: 'KZT', label: 'Tenge' },
	{ value: 'RUB', label: 'Roubles' },
	{ value: 'USD', label: 'US Dollars' },
	{ value: 'EUR', label: 'Euro' }
];

const Currencies = () => {
	const settings = useSelector(settingsSelectors.settingsSelector);
	const recalcCur = useRecalc();
	const defaultCur = useDefault();

	const recalcView = CURRENCIES.find((currency) => currency.value === settings.recalc_currency);
	const defaultView = CURRENCIES.find((currency) => currency.value === settings.default_currency);

	return (
		<SettingsBlock title="Currencies">
			<SettingsEntry onPress={recalcCur.open} left="Re-calc currency" right={recalcView?.label ?? ''} />
			<SettingsEntry onPress={defaultCur.open} left="Default currency" right={defaultView?.label ?? ''} />

			{recalcCur.isOpen && <Select values={CURRENCIES} close={recalcCur.close} onSelect={recalcCur.select} />}
			{defaultCur.isOpen && <Select values={CURRENCIES} close={defaultCur.close} onSelect={defaultCur.select} />}
		</SettingsBlock>
	);
};

export default Currencies;
