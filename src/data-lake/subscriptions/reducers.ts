import { fromDate, getLocalTimeZone } from '@internationalized/date';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { SubscriptionsSlice, Subscription } from './subscriptions.d';

const timezone = getLocalTimeZone();

export const addSubscriptions = {
	reducer: (slice: SubscriptionsSlice, action: PayloadAction<Subscription[]>) => {
		const subscriptions = action.payload;
		const idsByDates: Record<string, string[]> = {};

		for (const subscription of subscriptions) {
			const date = fromDate(new Date(subscription.next_payment), timezone);
			const absoluteDate = date.toAbsoluteString();

			idsByDates[absoluteDate] = [...(idsByDates[absoluteDate] || []), subscription.id];

			slice.byId[subscription.id] = subscription;
			slice.allIds = [...new Set([...slice.allIds, subscription.id])];
		}

		slice.idsByDates = { ...slice.idsByDates, ...idsByDates };
	},
	prepare: (payload: Subscription[]) => ({ payload })
};
