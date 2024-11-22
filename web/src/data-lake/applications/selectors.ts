import { createSelector } from '@reduxjs/toolkit';

import type { Application, ApplicationsSlice } from './applications.d';

export const appsSelector = createSelector(
	[(store) => store.applications],
	(applications: ApplicationsSlice) => applications
);

export const allAppsSelector = createSelector([appsSelector], (applications) =>
	applications.allIds.map((id) => applications.byId[id])
);

export const previewSelector = createSelector([appsSelector], (applications) => {
	return (applications.previewIds || []).map((id) => applications.byId[id]);
});

export const appSelector = createSelector(
	[appsSelector, (_, appId: Application['id']) => appId],
	(applications, appId) => applications.byId[appId]
);
