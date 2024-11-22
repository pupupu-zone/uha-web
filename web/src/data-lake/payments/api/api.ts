import API from '@api';

import type { GetPaymentsResT, GetPaymentsReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Get list of 6 random applications
		getPreviewPayments: build.query<GetPaymentsResT, GetPaymentsReqT>({
			query: () => ({
				url: '/payments',
				method: 'GET',
				params: {
					limit: 6,
					random: true,
					sort: 'asc'
				},
				credentials: 'include'
			})
		}),

		// Get list of applications
		getAllPayments: build.query<GetPaymentsResT, GetPaymentsReqT>({
			query: () => ({
				url: '/payments',
				method: 'GET',
				credentials: 'include'
			})
		})
	})
});

export default idApi;
