import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';
import initialState from './initial-state';

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	selectors,
	reducers
});

const actions = categoriesSlice.actions;

/**
 * Export redux
 */
export { selectors, reducers, actions };
export default categoriesSlice.reducer;

/**
 * Export types
 */
export * from './categories.d';
