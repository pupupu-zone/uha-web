import { createSelector } from '@reduxjs/toolkit';

import type { SettingsSlice } from './settings.d';

export const settingsSelector = createSelector([(store) => store.settings], (settings: SettingsSlice) => settings);

export const themeSelector = createSelector([settingsSelector], (user) => user.theme);
export const currencySelector = createSelector([settingsSelector], (user) => user.default_currency);
export const languageSelector = createSelector([settingsSelector], (user) => user.language);
export const reCalcCurrencySelector = createSelector([settingsSelector], (user) => user.recalc_currency);
