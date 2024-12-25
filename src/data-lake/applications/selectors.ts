import Fuse from 'fuse.js';
import { createSelector } from '@reduxjs/toolkit';
import { searchSelector } from '@data/search/selectors';

import type { Application, ApplicationsSlice } from './applications.d';

export const appsSelector = createSelector(
	[(store) => store.applications],
	(applications: ApplicationsSlice) => applications
);

export const allAppsSelector = createSelector([appsSelector], (applications) =>
	applications.allIds.map((id) => applications.byId[id])
);

export const filteredSelector = createSelector([allAppsSelector, searchSelector], (allApps, search) => {
	const withQuery = search.query.length > 0;
	const inScope = search.scopes.includes('applications');

	if (inScope && withQuery) {
		const fuse = new Fuse(allApps, {
			keys: ['name', 'aliases'],
			threshold: 0.3
		});

		return fuse.search(search.query).map((result) => result.item);
	}

	return allApps;
});

export const previewSelector = createSelector([filteredSelector], (filteredApps) => {
	return filteredApps.slice(0, 6);
});

export const appSelector = createSelector(
	[appsSelector, (_, appId: Application['id']) => appId],
	(applications, appId) => applications.byId[appId]
);
