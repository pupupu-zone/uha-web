import API from '@api';

import type { GetApplicationsResT, GetApplicationsReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Get list of 6 random applications
		obtainPreviewApplications: build.query<GetApplicationsResT, GetApplicationsReqT>({
			query: () => ({
				url: '/apps',
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
		obtainAllApplications: build.query<GetApplicationsResT, GetApplicationsReqT>({
			query: () => ({
				url: '/apps',
				method: 'GET',
				credentials: 'include'
			})
		})
	})
});

export default idApi;
