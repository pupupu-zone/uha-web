import type { PayloadAction } from '@reduxjs/toolkit';
import type { Category, CategoriesSlice } from './categories';

import initialState from './initial-state';

export const addCategory = {
	reducer: (slice: CategoriesSlice, { payload }: PayloadAction<Category>) => {
		slice.allIds.push(payload.id);
		slice.byId[payload.id] = payload;
	},
	prepare: (payload: Category) => ({ payload })
};

export const addCategories = {
	reducer: (slice: CategoriesSlice, action: PayloadAction<Category[]>) => {
		const categories = action.payload;

		for (const category of categories) {
			slice.allIds = [...new Set([...slice.allIds, category.id])];
			slice.byId[category.id] = category;
		}
	},
	prepare: (payload: Category[]) => ({ payload })
};

export const clearCategories = {
	reducer: (slice: CategoriesSlice) => {
		slice = initialState;
	},
	prepare: (payload: void) => ({ payload })
};
