import Fuse from 'fuse.js';
import { createSelector } from '@reduxjs/toolkit';
import { searchSelector } from '@data/search/selectors';

import type { Payment, PaymentsSlice } from './payments.d';

export const paymentsSelector = createSelector([(store) => store.payments], (payments: PaymentsSlice) => payments);

export const allPaymentsSelector = createSelector([paymentsSelector], (payments) =>
	payments.allIds.map((id) => payments.byId[id])
);

export const filteredSelector = createSelector([allPaymentsSelector, searchSelector], (allPayments, search) => {
	const withQuery = search.query.length > 0;
	const inScope = search.scopes.includes('payments');

	if (inScope && withQuery) {
		const fuse = new Fuse(allPayments, {
			keys: ['name', 'comment'],
			threshold: 0.3
		});

		return fuse.search(search.query).map((result) => result.item);
	}

	return allPayments;
});

export const previewSelector = createSelector([filteredSelector], (filteredPayments) => {
	return filteredPayments.slice(0, 6);
});

export const paymentSelector = createSelector(
	[paymentsSelector, (_, paymentId: Payment['id']) => paymentId],
	(payments, paymentId) => payments.byId[paymentId]
);
