import { useState, useCallback } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';

import { actions as settingsActions } from '@data/settings';
import { selectors as settingsSelectors } from '@data/settings';

const useTheme = () => {
	const dispatch = useAppDispatch();
	const settings = useSelector(settingsSelectors.settingsSelector);

	const [isOpen, setIsOpen] = useState(false);
	const [theme, setTheme] = useState(settings.theme);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);

	const select = (value) => {
		setTheme(value.value);
		dispatch(settingsActions.setSettings({ theme: value.value }));
	};

	return {
		isOpen,
		theme,
		open,
		close,
		select
	};
};

export default useTheme;
