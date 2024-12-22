import { DateTime } from 'luxon';
import * as TimSort from 'timsort';
import { createSelector } from '@reduxjs/toolkit';

import type { SubscriptionsSlice } from './subscriptions.d';

export const subsSelector = createSelector(
	[(store) => store.subscriptions],
	(subscriptions: SubscriptionsSlice) => subscriptions
);

export const allSubsSelector = createSelector(subsSelector, (subs) => {
	const allEntries = subs.allIds.map((id) => subs.byId[id]);

	TimSort.sort(allEntries, (a, b) => (DateTime.fromISO(a.next_payment) < DateTime.fromISO(b.next_payment) ? -1 : 1));

	return allEntries;
});
