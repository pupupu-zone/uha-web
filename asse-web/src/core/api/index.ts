import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
// import type { RootState } from '@store';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_REACT_APP_API_URL
	// prepareHeaders: (headers, { getState }) => {
	// 	// By default, if we have a token in the store, let's use that for authenticated requests
	// 	const token = (getState() as RootStateT).auth.token;

	// 	if (token) {
	// 		headers.set('authentication', `Bearer ${token}`);
	// 	}

	// 	return headers;
	// }
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

const api = createApi({
	baseQuery: baseQueryWithRetry,
	tagTypes: ['HealthCheck'],
	endpoints: () => ({})
});

export default api;
