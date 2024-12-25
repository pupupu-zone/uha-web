import { createSelector } from '@reduxjs/toolkit';

import type { SearchSlice } from './search';

export const searchSelector = createSelector([(store) => store.search], (search: SearchSlice) => search);

export const searchQuerySelector = createSelector(searchSelector, (search) => search.query);
