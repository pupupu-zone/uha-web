import API from '@api';

const healthCheckApi = API.injectEndpoints({
	endpoints: (build) => ({
		getAsyncCheck: build.query<{ email: string; password: string }, void>({
			query: () => ({
				url: `/health/heartbeat`,
				method: 'GET'
			}),
			transformResponse: (response) => {
				return {
					email: 'test@example.com',
					password: '12345678'
				};
			}
		})
	})
});

export const { useGetAsyncCheckQuery } = healthCheckApi;

export default healthCheckApi;
