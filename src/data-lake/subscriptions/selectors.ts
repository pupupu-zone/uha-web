import { fromDate, getLocalTimeZone } from '@internationalized/date';

import * as TimSort from 'timsort';
import { createSelector } from '@reduxjs/toolkit';

import type { SubscriptionsSlice } from './subscriptions.d';

export const subsSelector = createSelector(
	[(store) => store.subscriptions],
	(subscriptions: SubscriptionsSlice) => subscriptions
);

export const allSubsSelector = createSelector(subsSelector, (subs) => {
	const allEntries = subs.allIds.map((id) => subs.byId[id]);
	const timezone = getLocalTimeZone();

	TimSort.sort(allEntries, (a, b) => {
		const dateA = fromDate(new Date(a.next_payment), timezone);
		const dateB = fromDate(new Date(b.next_payment), timezone);

		return dateA.compare(dateB);
	});

	return allEntries;
});

export const subscriptionByIdSelector = createSelector(
	[subsSelector, (_, subId: string) => subId],
	(subsSelector, subId) => subsSelector.byId[subId]
);

export const subIdsByDatesSelector = createSelector([subsSelector], (subs) => subs.idsByDates);
