import { createSelector } from '@reduxjs/toolkit';

import type { Application, ApplicationsSlice } from './applications.d';

export const appsSelector = createSelector(
	[(store) => store.applications],
	(applications: ApplicationsSlice) => applications
);

export const allAppsSelector = createSelector([appsSelector], (applications) =>
	applications.allIds.map((id) => applications.byId[id])
);

const PREVIEW_SIZE = 6;

export const previewSelector = createSelector([allAppsSelector], (applications) => {
	return applications;
	const shuffled = [...applications].sort(() => Math.random() - 0.5).slice(0, PREVIEW_SIZE);

	return shuffled.slice(0, PREVIEW_SIZE);
});

export const appSelector = createSelector(
	[appsSelector, (_, appId: Application['id']) => appId],
	(applications, appId) => applications.byId[appId]
);
