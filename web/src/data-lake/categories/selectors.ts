import { createSelector } from '@reduxjs/toolkit';

import type { CategoriesSlice } from './categories.d';

export const categoriesSelector = createSelector(
	[(store) => store.categories],
	(categories: CategoriesSlice) => categories
);

export const allCategoriesSelector = createSelector([categoriesSelector], (categories) =>
	categories.allIds.map((id) => categories.byId[id])
);

const PREVIEW_SIZE = 6;

export const previewSelector = createSelector([allCategoriesSelector], (categories) => {
	const shuffled = [...categories].sort(() => Math.random() - 0.5).slice(0, PREVIEW_SIZE);

	// If we have less than PREVIEW_SIZE categories, pad with nulls
	return shuffled.slice(0, PREVIEW_SIZE);
});

export const categorySelector = createSelector(
	[categoriesSelector, (_, categoryId: string) => categoryId],
	(categories, categoryId) => categories.byId[categoryId]
);
