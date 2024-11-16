import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserSlice, UserProfile } from './user.d';

import initialState from './initial-state';

export const addUser = {
	reducer: (slice: UserSlice, { payload }: PayloadAction<UserProfile>) => {
		slice.id = payload.user_id;

		slice.data = {
			email: payload.email ?? initialState.data.email,
			name: payload.name ?? initialState.data.name,
			avatar_url: payload.avatar_url ?? initialState.data.avatar_url
		};

		slice.settings = {
			theme: payload.theme ?? initialState.settings.theme,
			default_currency: payload.default_currency ?? initialState.settings.default_currency
		};
	},
	prepare: (payload: UserProfile) => ({ payload })
};

export const editUser = {
	reducer: (slice: UserSlice, { payload }: PayloadAction<Partial<UserProfile>>) => {
		if (!slice.data) {
			slice.data = initialState.data;
		}

		if (payload.user_id) slice.id = payload.user_id;

		if (payload.email) slice.data.email = payload.email;
		if (payload.name) slice.data.name = payload.name;
		if (payload.avatar_url) slice.data.avatar_url = payload.avatar_url;

		if (payload.theme) slice.settings.theme = payload.theme;
		if (payload.default_currency) slice.settings.default_currency = payload.default_currency;
	},
	prepare: (payload: Partial<UserProfile>) => ({ payload })
};

export const clearUser = {
	reducer: (slice: UserSlice) => {
		slice = initialState;
	},
	prepare: (payload: void) => ({ payload })
};
