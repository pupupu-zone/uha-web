import { useState, useCallback } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';

import { actions as settingsActions } from '@data/settings';
import { selectors as settingsSelectors } from '@data/settings';

const useFractions = () => {
	const dispatch = useAppDispatch();
	const settings = useSelector(settingsSelectors.settingsSelector);

	const [isOpen, setIsOpen] = useState(false);
	const [showFractions, setShowFractions] = useState(settings.show_fractions);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);

	const select = (value) => {
		setShowFractions(value.value);
		dispatch(settingsActions.setSettings({ show_fractions: value.value }));
	};

	return {
		isOpen,
		showFractions,
		open,
		close,
		setShowFractions,
		select
	};
};

export default useFractions;
