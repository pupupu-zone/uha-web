import API from '@api';

import type { GetCategoriesResT, GetCategoriesReqT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Get list of 6 random categories for preview
		obtainPreviewCategories: build.query<GetCategoriesResT, GetCategoriesReqT>({
			query: () => ({
				url: '/categories',
				method: 'GET',
				params: {
					limit: 6,
					random: true
				},
				credentials: 'include'
			})
		}),

		// Get list of categories
		getAllCategories: build.query<GetCategoriesResT, GetCategoriesReqT>({
			query: () => ({
				url: '/categories',
				method: 'GET',
				credentials: 'include'
			})
		})
	})
});

export default idApi;
