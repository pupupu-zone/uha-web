import API from '@api';
import * as TimSort from 'timsort';

import type { GetPaymentsResT, GetPaymentsReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Get list of applications
		getAllPayments: build.query<GetPaymentsResT, GetPaymentsReqT>({
			query: () => ({
				url: '/payments',
				method: 'GET',
				credentials: 'include'
			}),
			transformResponse: (response: GetPaymentsResT) => {
				TimSort.sort(response, (a, b) => (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1));

				return response;
			}
		})
	})
});

export default idApi;
