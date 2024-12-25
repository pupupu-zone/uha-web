import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';

import type { AuthSlice } from './types.d';

const initialState: AuthSlice = {
	isAuthorized: false
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	selectors,
	reducers
});

const actions = authSlice.actions;

/**
 * Exports
 */
export type { AuthSlice };
export { selectors, reducers, actions };
export default authSlice.reducer;
