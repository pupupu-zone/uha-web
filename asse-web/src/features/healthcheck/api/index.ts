import API from '@api';

import type { HealthResponseT } from './api.d';

const healthCheckApi = API.injectEndpoints({
	endpoints: (build) => ({
		getHealthCheck: build.query<HealthResponseT, void>({
			query: () => ({
				url: `/health/heartbeat`,
				method: 'GET'
			}),
			providesTags: ['HealthCheck']
		})
	})
});

export const { useGetHealthCheckQuery, useLazyGetHealthCheckQuery } = healthCheckApi;

export default healthCheckApi;
