import { createSelector } from '@reduxjs/toolkit';

import type { AuthSlice } from './types.d';

export const authSelector = createSelector([(store) => store.auth], (auth: AuthSlice) => auth);

export const isAuthorizedSelector = createSelector([authSelector], (auth) => auth.isAuthorized);
