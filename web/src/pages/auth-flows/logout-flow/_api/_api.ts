import API from '@api';

import type { LogoutResT, LogoutReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		logout: build.query<LogoutResT, LogoutReqT>({
			query: () => ({
				url: '/auth/sign-out',
				credentials: 'include',
				method: 'DELETE'
			})
		})
	})
});

export default idApi;
