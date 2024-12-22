import type { PayloadAction } from '@reduxjs/toolkit';
import type { SubscriptionsSlice, Subscription } from './subscriptions.d';

export const addSubscriptions = {
	reducer: (slice: SubscriptionsSlice, action: PayloadAction<Subscription[]>) => {
		const subscriptions = action.payload;
		const idsByDates: Record<string, string[]> = {};

		for (const subscription of subscriptions) {
			const date = subscription.next_payment.split('T')[0];
			idsByDates[date] = [...(idsByDates[date] || []), subscription.id];

			slice.byId[subscription.id] = subscription;
			slice.allIds = [...new Set([...slice.allIds, subscription.id])];
		}

		slice.idsByDates = { ...slice.idsByDates, ...idsByDates };
	},
	prepare: (payload: Subscription[]) => ({ payload })
};
