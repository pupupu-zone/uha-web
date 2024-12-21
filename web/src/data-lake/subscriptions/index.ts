import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';
import initialState from './initial-state';

export const applicationsSlice = createSlice({
	name: 'applications',
	initialState,
	selectors,
	reducers
});

const actions = applicationsSlice.actions;

/**
 * Export redux
 */
export { selectors, reducers, actions };
export default applicationsSlice.reducer;

/**
 * Export types
 */
export * from './subscriptions.d';
