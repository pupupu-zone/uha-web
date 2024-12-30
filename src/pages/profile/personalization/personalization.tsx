import React from 'react';
import { useSelector } from 'react-redux';

import { selectors as settingsSelectors } from '@data/settings';

import { useTheme, useLanguage } from './_hooks';

import { Select } from '@ui';
import { SettingsBlock, SettingsEntry } from '@pages/profile/_components';

const THEMES = [
	{ value: 'System', label: 'System' },
	{ value: 'Light', label: 'Light' },
	{ value: 'Dark', label: 'Dark' }
];

const LANGUAGES = [
	{ value: 'En', label: 'English' },
	{ value: 'Ru', label: 'Русский' },
	{ value: 'Kz', label: 'Қазақша' }
];

const Personalization = () => {
	const settings = useSelector(settingsSelectors.settingsSelector);
	const theme = useTheme();
	const language = useLanguage();

	const themeView = THEMES.find((theme) => theme.value === settings.theme);
	const langView = LANGUAGES.find((language) => language.value === settings.language);

	return (
		<SettingsBlock title="Personalization">
			<SettingsEntry isDisabled onPress={theme.open} left="Theme" right={themeView?.label ?? ''} />
			<SettingsEntry isDisabled onPress={language.open} left="Language" right={langView?.label ?? ''} />

			{theme.isOpen && <Select values={THEMES} close={theme.close} onSelect={theme.select} />}
			{language.isOpen && <Select values={LANGUAGES} close={language.close} onSelect={language.select} />}
		</SettingsBlock>
	);
};

export default Personalization;
