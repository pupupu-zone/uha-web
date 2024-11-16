import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserSlice, UserProfile } from './user.d';

import initialState from './initial-state';

export const addUser = {
	reducer: (slice: UserSlice, { payload }: PayloadAction<UserProfile>) => {
		slice.id = payload.user_id;

		slice.email = payload.email ?? initialState.email;
		slice.name = payload.name ?? initialState.name;
		slice.avatar_url = payload.avatar_url ?? initialState.avatar_url;
	},
	prepare: (payload: UserProfile) => ({ payload })
};

export const updateUser = {
	reducer: (slice: UserSlice, { payload }: PayloadAction<Partial<UserProfile>>) => {
		if (payload.user_id) slice.id = payload.user_id;

		if (payload.email) slice.email = payload.email;
		if (payload.name) slice.name = payload.name;
		if (payload.avatar_url) slice.avatar_url = payload.avatar_url;
	},
	prepare: (payload: Partial<UserProfile>) => ({ payload })
};

export const clearUser = {
	reducer: (slice: UserSlice) => {
		slice = initialState;
	},
	prepare: (payload: void) => ({ payload })
};
