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
		const apps = action.payload;

		for (const app of apps) {
			slice.allIds = [...new Set([...slice.allIds, app.id])];
			slice.byId[app.id] = app;
		}
	},
	prepare: (payload: Application[]) => ({ payload })
};

export const addAppPreviews = {
	reducer: (slice: ApplicationsSlice, action: PayloadAction<Application[]>) => {
		const apps = action.payload;

		slice.previewIds = [];

		for (const app of apps) {
			slice.allIds = [...new Set([...slice.allIds, app.id])];
			slice.previewIds.push(app.id);
			slice.byId[app.id] = app;
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
