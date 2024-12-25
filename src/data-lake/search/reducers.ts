import type { PayloadAction } from '@reduxjs/toolkit';
import type { SearchSlice } from './search';

import initialState from './initial-state';

export const setSearch = {
	reducer: (slice: SearchSlice, { payload }: PayloadAction<Partial<SearchSlice>>) => {
		slice.query = payload.query ?? initialState.query;
		slice.scopes = payload.scopes ?? initialState.scopes;
	},
	prepare: (payload: Partial<SearchSlice>) => ({ payload })
};
