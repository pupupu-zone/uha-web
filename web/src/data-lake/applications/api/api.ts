import API from '@api';
import * as TimSort from 'timsort';

import type { GetApplicationsResT, GetApplicationsReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Get list of applications
		getAllApplications: build.query<GetApplicationsResT, GetApplicationsReqT>({
			query: () => ({
				url: '/apps',
				method: 'GET',
				credentials: 'include'
			}),
			transformResponse: (response: GetApplicationsResT) => {
				TimSort.sort(response, (a, b) => (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1));

				return response;
			}
		})
	})
});

export default idApi;
