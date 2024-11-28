import { createSelector } from '@reduxjs/toolkit';

import type { CategoriesSlice } from './categories.d';

export const categoriesSelector = createSelector(
	[(store) => store.categories],
	(categories: CategoriesSlice) => categories
);

export const allCategoriesSelector = createSelector([categoriesSelector], (categories) =>
	categories.allIds.map((id) => categories.byId[id])
);

export const previewSelector = createSelector([categoriesSelector], (categories) => {
	const firstIds = categories.allIds.slice(0, 6);

	return firstIds.map((id) => categories.byId[id]);
});

export const categorySelector = createSelector(
	[categoriesSelector, (_, categoryId: string) => categoryId],
	(categories, categoryId) => categories.byId[categoryId]
);
