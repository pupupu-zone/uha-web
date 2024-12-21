import type { SubscriptionsSlice } from './subscriptions.d';

const initialState: SubscriptionsSlice = {
	allIds: [],
	byId: {},
	idsByMonths: {}
};

export default initialState;
