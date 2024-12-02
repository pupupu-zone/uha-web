import Fuse from 'fuse.js';
import { createSelector } from '@reduxjs/toolkit';
import { searchSelector } from '@data/search/selectors';

import type { CategoriesSlice } from './categories.d';

export const categoriesSelector = createSelector(
	[(store) => store.categories],
	(categories: CategoriesSlice) => categories
);

export const allCategoriesSelector = createSelector([categoriesSelector], (categories) =>
	categories.allIds.map((id) => categories.byId[id])
);

export const filteredSelector = createSelector([allCategoriesSelector, searchSelector], (allCategories, search) => {
	const withQuery = search.query.length > 0;
	const inScope = search.scopes.includes('categories');

	if (inScope && withQuery) {
		const fuse = new Fuse(allCategories, {
			keys: ['name'],
			threshold: 0.3
		});

		return fuse.search(search.query).map((result) => result.item);
	}

	return allCategories;
});

export const previewSelector = createSelector([filteredSelector], (filteredCategories) => {
	return filteredCategories.slice(0, 6);
});

export const categorySelector = createSelector(
	[categoriesSelector, (_, categoryId: string) => categoryId],
	(categories, categoryId) => categories.byId[categoryId]
);
