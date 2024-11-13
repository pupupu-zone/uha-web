import { createSelector } from '@reduxjs/toolkit';

import type { UserSlice } from './user.d';

export const userSelector = createSelector([(store) => store.user], (user: UserSlice) => user);

export const userSettingsSelector = createSelector([userSelector], (user) => user.settings);
export const userDataSelector = createSelector([userSelector], (user) => user.data);
export const userIdSelector = createSelector([userSelector], (user) => user.id);
