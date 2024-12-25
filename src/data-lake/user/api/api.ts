import API from '@api';

import type { UserProfileResT, UserProfileReqT, UserUpdateResT, UserUpdateReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Get user's profile
		obtainUser: build.query<UserProfileResT, UserProfileReqT>({
			query: () => ({
				url: '/user',
				method: 'GET',
				credentials: 'include'
			})
		}),
		updateUser: build.query<UserUpdateResT, UserUpdateReqT>({
			query: (body) => ({
				url: `/user/update`,
				method: 'PUT',
				credentials: 'include',
				body
			})
		})
	})
});

export default idApi;
