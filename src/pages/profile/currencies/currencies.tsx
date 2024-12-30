import React from 'react';
import { useSelector } from 'react-redux';

import { selectors as settingsSelectors } from '@data/settings';

import { useRecalc, useDefault, useFractions } from './_hooks';

import { Select } from '@ui';
import { SettingsBlock, SettingsEntry } from '@pages/profile/_components';

const CURRENCIES = [
	{ value: 'KZT', label: 'Tenge' },
	{ value: 'RUB', label: 'Roubles' },
	{ value: 'USD', label: 'US Dollars' },
	{ value: 'EUR', label: 'Euro' }
];

const SHOW_FRACTIONS = [
	{ value: true, label: 'Yes' },
	{ value: false, label: 'No' }
];

const Currencies = () => {
	const settings = useSelector(settingsSelectors.settingsSelector);
	const recalcCur = useRecalc();
	const defaultCur = useDefault();
	const fractions = useFractions();

	const recalcView = CURRENCIES.find((currency) => currency.value === settings.recalc_currency);
	const defaultView = CURRENCIES.find((currency) => currency.value === settings.default_currency);
	const fractionsView = SHOW_FRACTIONS.find((value) => value.value === settings.show_fractions);

	return (
		<SettingsBlock title="Currencies">
			<SettingsEntry isDisabled onPress={recalcCur.open} left="Re-calc currency" right={recalcView?.label ?? ''} />
			<SettingsEntry isDisabled onPress={defaultCur.open} left="Default currency" right={defaultView?.label ?? ''} />
			<SettingsEntry onPress={fractions.open} left="Show Fractions" right={fractionsView?.label ?? ''} />

			{recalcCur.isOpen && <Select values={CURRENCIES} close={recalcCur.close} onSelect={recalcCur.select} />}
			{defaultCur.isOpen && <Select values={CURRENCIES} close={defaultCur.close} onSelect={defaultCur.select} />}
			{fractions.isOpen && <Select values={SHOW_FRACTIONS} close={fractions.close} onSelect={fractions.select} />}
		</SettingsBlock>
	);
};

export default Currencies;
