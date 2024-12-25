import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';
import initialState from './initial-state';

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	selectors,
	reducers
});

const actions = searchSlice.actions;

/**
 * Export redux
 */
export { selectors, reducers, actions };
export default searchSlice.reducer;

/**
 * Export types
 */
export * from './search.d';
