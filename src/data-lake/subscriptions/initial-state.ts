import type { SubscriptionsSlice } from './subscriptions.d';

const initialState: SubscriptionsSlice = {
	allIds: [],
	byId: {},
	idsByDates: {}
};

export default initialState;
