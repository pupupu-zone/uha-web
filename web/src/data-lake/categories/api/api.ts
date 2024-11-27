import API from '@api';
import { sortBy } from '@utils';

import type { Category } from '@data/categories';
import type { GetCategoriesResT, GetCategoriesReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Get list of 6 random categories for preview
		getPreviewCategories: build.query<GetCategoriesResT, GetCategoriesReqT>({
			query: () => ({
				url: '/categories',
				method: 'GET',
				params: {
					limit: 6,
					random: true
				},
				credentials: 'include'
			}),
			transformResponse: (response: GetCategoriesResT) => {
				return sortBy<Category>(response, 'name');
			}
		}),

		// Get list of categories
		getAllCategories: build.query<GetCategoriesResT, GetCategoriesReqT>({
			query: () => ({
				url: '/categories',
				method: 'GET',
				credentials: 'include'
			}),
			transformResponse: (response: GetCategoriesResT) => {
				return sortBy<Category>(response, 'name');
			}
		})
	})
});

export default idApi;
