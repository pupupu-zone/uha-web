import { createSelector } from '@reduxjs/toolkit';

import type { UserSlice } from './user.d';

export const userSelector = createSelector([(store) => store.user], (user: UserSlice) => user);

export const userIdSelector = createSelector([userSelector], (user) => user.id);
