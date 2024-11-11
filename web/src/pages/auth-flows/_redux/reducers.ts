import type { AuthSlice } from './types.d';

export const authLogin = {
	reducer: (slice: AuthSlice) => {
		slice.isAuthorized = true;
	},
	prepare: (payload: void) => ({ payload })
};

export const authLogout = {
	reducer: (slice: AuthSlice) => {
		slice.isAuthorized = false;
	},
	prepare: (payload: void) => ({ payload })
};
