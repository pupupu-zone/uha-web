import { createSlice } from '@reduxjs/toolkit';

import * as selectors from './selectors';
import * as reducers from './reducers';
import initialState from './initial-state';

export const paymentsSlice = createSlice({
	name: 'payments',
	initialState,
	selectors,
	reducers
});

const actions = paymentsSlice.actions;

/**
 * Export redux
 */
export { selectors, reducers, actions };
export default paymentsSlice.reducer;

/**
 * Export types
 */
export * from './payments.d';
