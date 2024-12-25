import { useState, useCallback } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';

import { actions as settingsActions } from '@data/settings';
import { selectors as settingsSelectors } from '@data/settings';

const useLanguage = () => {
	const dispatch = useAppDispatch();
	const settings = useSelector(settingsSelectors.settingsSelector);

	const [isOpen, setIsOpen] = useState(false);
	const [language, setLanguage] = useState(settings.language);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);

	const select = (value) => {
		setLanguage(value.value);
		dispatch(settingsActions.setSettings({ language: value.value }));
	};

	return {
		isOpen,
		language,
		open,
		close,
		select
	};
};

export default useLanguage;
