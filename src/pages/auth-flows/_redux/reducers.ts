import type { AuthSlice } from './types.d';

export const authLogin = {
	reducer: (slice: AuthSlice) => {
		slice.isAuthorized = true;
	},
	prepare: (payload: void) => ({ payload })
};
