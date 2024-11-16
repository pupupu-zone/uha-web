import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';
import initialState from './initial-state';

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	selectors,
	reducers
});

const actions = settingsSlice.actions;

/**
 * Export redux
 */
export { selectors, reducers, actions };
export default settingsSlice.reducer;

/**
 * Export types
 */
export * from './settings.d';
