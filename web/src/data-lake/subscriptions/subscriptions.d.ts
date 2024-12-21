export enum IntervalTypes {
	'day',
	'week',
	'fortnight',
	'month',
	'biannual',
	'annual',
	'biennial'
}

export enum Currencies {
	'USD',
	'RUB',
	'KZT'
}

export type Subscription = {
	id: string;
	user_id: string;
	app_id: string;
	payment_method_id: string;
	category_id: string;
	interval_value: number;
	interval_type: IntervalTypes;
	price: number;
	currency: Currencies;
	first_payment: string;
	next_payment: string;
};

export type SubscriptionsSlice = {
	allIds: string[];
	byId: Record<string, Subscription>;
	idsByMonths: Record<string, string[]>; // { '2024-12': ['subscriptionId1', 'subscriptionId2'] }
};
