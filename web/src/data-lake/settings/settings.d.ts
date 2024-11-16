import type { UserProfile } from '@data/user';

export type SettingsSlice = {
	theme: UserProfile['theme'];
	default_currency: UserProfile['default_currency'];
	language: UserProfile['language'];
	recalc_currency: UserProfile['recalc_currency'];
};
