import { useState, useCallback } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';

import { actions as settingsActions } from '@data/settings';
import { selectors as settingsSelectors } from '@data/settings';

const useRecalc = () => {
	const dispatch = useAppDispatch();
	const settings = useSelector(settingsSelectors.settingsSelector);

	const [isOpen, setIsOpen] = useState(false);
	const [currency, setCurrency] = useState(settings.recalc_currency);

	const open = useCallback(() => setIsOpen(true), []);
	const close = useCallback(() => setIsOpen(false), []);

	const select = (value) => {
		setCurrency(value.value);
		dispatch(settingsActions.setSettings({ recalc_currency: value.value }));
	};

	return {
		isOpen,
		currency,
		open,
		close,
		setCurrency,
		select
	};
};

export default useRecalc;
