import API from '@api';

import type { UserProfileResT, UserProfileReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Get user's profile
		obtainUser: build.query<UserProfileResT, UserProfileReqT>({
			query: () => ({
				url: '/user/obtain',
				method: 'GET',
				credentials: 'include',
				cache: 'no-cache'
			})
		})
	})
});

export default idApi;