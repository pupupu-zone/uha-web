import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';
import initialState from './initial-state';

export const userSlice = createSlice({
	name: 'user',
	initialState,
	selectors,
	reducers
});

const actions = userSlice.actions;

/**
 * Export redux
 */
export { selectors, reducers, actions };
export default userSlice.reducer;

/**
 * Export types
 */
export * from './user.d';
