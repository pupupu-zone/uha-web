import API from '@api';

import type { LoginResSuccessT, LoginReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		login: build.query<LoginResSuccessT, LoginReqT>({
			query: (body) => ({
				url: '/auth/sign-in',
				method: 'POST',
				credentials: 'include',
				body
			}),
			providesTags: ['login']
		})
	})
});

export default idApi;
