import API from '@api';

import type { GetSubsResT, GetSubsReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Get list of subscriptions
		// @TODO: Add pagination by date
		getAllSubs: build.query<GetSubsResT, GetSubsReqT>({
			query: () => ({
				url: '/subscriptions',
				method: 'GET',
				credentials: 'include'
			})
		})
	})
});

export default idApi;
