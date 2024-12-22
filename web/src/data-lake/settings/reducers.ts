import type { PayloadAction } from '@reduxjs/toolkit';
import type { SettingsSlice } from './settings.d';

import initialState from './initial-state';

export const setSettings = {
	reducer: (slice: SettingsSlice, { payload }: PayloadAction<Partial<SettingsSlice>>) => {
		slice.theme = payload.theme || slice.theme || initialState.theme;
		slice.default_currency = payload.default_currency || slice.default_currency || initialState.default_currency;
		slice.language = payload.language || slice.language || initialState.language;
		slice.recalc_currency = payload.recalc_currency || slice.recalc_currency || initialState.recalc_currency;
		slice.show_fractions = typeof payload.show_fractions === 'boolean' ? payload.show_fractions : slice.show_fractions;
	},
	prepare: (payload: Partial<SettingsSlice>) => ({ payload })
};
