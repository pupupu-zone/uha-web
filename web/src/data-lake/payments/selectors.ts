import { createSelector } from '@reduxjs/toolkit';

import type { Payment, PaymentsSlice } from './payments.d';

export const paymentsSelector = createSelector([(store) => store.payments], (payments: PaymentsSlice) => payments);

export const allPaymentsSelector = createSelector([paymentsSelector], (payments) =>
	payments.allIds.map((id) => payments.byId[id])
);

export const previewSelector = createSelector([paymentsSelector], (payments) => {
	const firstIds = payments.allIds.slice(0, 6);

	return firstIds.map((id) => payments.byId[id]);
});

export const appSelector = createSelector(
	[paymentsSelector, (_, paymentId: Payment['id']) => paymentId],
	(payments, paymentId) => payments.byId[paymentId]
);
