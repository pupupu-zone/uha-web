import type { PayloadAction } from '@reduxjs/toolkit';
import type { Application, ApplicationsSlice } from './applications';

import initialState from './initial-state';

export const addApp = {
	reducer: (slice: ApplicationsSlice, { payload }: PayloadAction<Application>) => {
		slice.allIds.push(payload.id);
		slice.byId[payload.id] = payload;
	},
	prepare: (payload: Application) => ({ payload })
};

export const addApps = {
	reducer: (slice: ApplicationsSlice, action: PayloadAction<Application[]>) => {
		const categories = action.payload;

		for (const category of categories) {
			slice.allIds = [...new Set([...slice.allIds, category.id])];
			slice.byId[category.id] = category;
		}
	},
	prepare: (payload: Application[]) => ({ payload })
};

export const clearApps = {
	reducer: (slice: ApplicationsSlice) => {
		slice = initialState;
	},
	prepare: (payload: void) => ({ payload })
};
