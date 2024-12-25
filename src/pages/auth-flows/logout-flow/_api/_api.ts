import API from '@api';
import { purgeIndexedDB, purgeSWCache } from '@utils';

import type { LogoutResT, LogoutReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		logout: build.mutation<LogoutResT, LogoutReqT>({
			query: () => ({
				url: '/auth/sign-out',
				credentials: 'include',
				method: 'DELETE'
			}),
			invalidatesTags: ['login'],
			async onQueryStarted(_, { dispatch }) {
				dispatch({ type: 'RESET' });

				await Promise.all([purgeIndexedDB(), purgeSWCache()]);

				localStorage.clear();
				sessionStorage.clear();

				window.location.reload();
			}
		})
	})
});

export default idApi;
