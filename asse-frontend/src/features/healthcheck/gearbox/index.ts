import { createSlice } from '@reduxjs/toolkit';

import selectors from './selectors';
import reducers from './reducers';

import type { HealthCheckStateT } from './gearbox.d';

const initialState: HealthCheckStateT = {
	history: []
};

export const healthCheckSlice = createSlice({
	name: 'health-check',
	initialState,
	selectors,
	reducers
});

/**
 * Exports
 */
export type { HealthCheckStateT };
export { selectors, reducers };
export default healthCheckSlice.reducer;
