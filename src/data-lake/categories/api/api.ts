import API from '@api';
import * as TimSort from 'timsort';

import type { GetCategoriesResT, GetCategoriesReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Get list of categories
		getAllCategories: build.query<GetCategoriesResT, GetCategoriesReqT>({
			query: () => ({
				url: '/categories',
				method: 'GET',
				credentials: 'include'
			}),
			transformResponse: (response: GetCategoriesResT) => {
				TimSort.sort(response, (a, b) => (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1));

				return response;
			}
		})
	})
});

export default idApi;
