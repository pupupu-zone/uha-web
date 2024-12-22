import type { SettingsSlice } from './settings.d';

const initialState: SettingsSlice = {
	theme: 'System',
	default_currency: 'USD',
	recalc_currency: 'USD',
	show_fractions: false,
	language: 'en'
};

export default initialState;
