import { createSelector } from '@reduxjs/toolkit';

import type { SubscriptionsSlice } from './subscriptions.d';

export const subsSelector = createSelector(
	[(store) => store.subscriptions],
	(subscriptions: SubscriptionsSlice) => subscriptions
);
