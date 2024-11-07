import API from '@api';

import type { LoginResT, LoginReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Login
		login: build.query<LoginResT, LoginReqT>({
			query: (body) => ({
				url: '/auth/sign-in',
				method: 'POST',
				credentials: 'include',
				body
			})
		})
	})
});

export default idApi;
