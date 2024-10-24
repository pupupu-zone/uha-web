import { nanoid } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { HealthCheckStateT, CheckHistoryT } from './gearbox.d';

const addCheck = {
	// then we inject them into state
	reducer: (state: HealthCheckStateT, action: PayloadAction<CheckHistoryT>) => {
		state.history.push(action.payload);
	},
	// First we prepare data
	prepare: (status: CheckHistoryT['status']) => {
		const payload = {
			id: nanoid(),
			status
		};

		return { payload };
	}
};

export default {
	addCheck
};
