import type { PayloadAction } from '@reduxjs/toolkit';
import type { SubscriptionsSlice, Subscription } from './subscriptions.d';

export const addSubscription = {
	reducer: (slice: SubscriptionsSlice, action: PayloadAction<Subscription[]>) => {
		const subscriptions = action.payload;

		for (const subscription of subscriptions) {
			slice.allIds = [...new Set([...slice.allIds, subscription.id])];
			slice.byId[subscription.id] = subscription;
		}
	},
	prepare: (payload: Subscription[]) => ({ payload })
};
