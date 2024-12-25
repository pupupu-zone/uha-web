import type { PayloadAction } from '@reduxjs/toolkit';
import type { Payment, PaymentsSlice } from './payments.d';

import initialState from './initial-state';

export const addPayment = {
	reducer: (slice: PaymentsSlice, { payload }: PayloadAction<Payment>) => {
		slice.allIds.push(payload.id);
		slice.byId[payload.id] = payload;
	},
	prepare: (payload: Payment) => ({ payload })
};

export const addPayments = {
	reducer: (slice: PaymentsSlice, action: PayloadAction<Payment[]>) => {
		const payments = action.payload;

		for (const payment of payments) {
			slice.allIds = [...new Set([...slice.allIds, payment.id])];
			slice.byId[payment.id] = payment;
		}
	},
	prepare: (payload: Payment[]) => ({ payload })
};

export const addPaymentPreviews = {
	reducer: (slice: PaymentsSlice, action: PayloadAction<Payment[]>) => {
		const payments = action.payload;

		slice.previewIds = [];

		for (const payment of payments) {
			slice.allIds = [...new Set([...slice.allIds, payment.id])];
			slice.previewIds.push(payment.id);
			slice.byId[payment.id] = payment;
		}
	},
	prepare: (payload: Payment[]) => ({ payload })
};

export const clearPayments = {
	reducer: (slice: PaymentsSlice) => {
		slice = initialState;
	},
	prepare: (payload: void) => ({ payload })
};
