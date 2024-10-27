import { createApi, fetchBaseQuery, retry, FetchArgs } from '@reduxjs/toolkit/query/react';
import { RootState } from '@store';
// import ROUTES from '@routes';
import { isPlainObject } from '@utils';

type PrepareHeaders = (headers: Headers) => Headers;

type TokenEndpoint = {
	url: string;
	method: string;
};
const NO_TOKEN_ENDPOINTS: TokenEndpoint[] = [];

const isNoTokenEndpoint = (arg: FetchArgs) => {
	return NO_TOKEN_ENDPOINTS.some((endpoint) => {
		return (
			arg.url.toLocaleUpperCase() === endpoint.url.toLocaleUpperCase() &&
			endpoint.method.toLocaleUpperCase() === arg.method!.toLocaleUpperCase()
		);
	});
};

const isJsonReady = (body: FetchArgs['body']): boolean => {
	if (body === null || typeof body !== 'object') {
		return false;
	}

	const isPlainOrArray = isPlainObject(body) || Array.isArray(body);
	const hasToJsonMethod = typeof body.toJSON === 'function';

	return isPlainOrArray || hasToJsonMethod;
};

const baseQuery = fetchBaseQuery({
	baseUrl: import.meta.env.VITE_REACT_APP_API_URL,
	prepareHeaders: (headers, { getState, arg }) => {
		const store = getState() as RootState;
		arg = arg as FetchArgs;

		const token = store.auth?.sessionToken;

		if (token && !isNoTokenEndpoint(arg)) {
			headers.append('authorization', `Bearer ${token}`);
		}

		if (!headers.has('Content-Type') && isJsonReady(arg.body)) {
			headers.append('Content-Type', 'application/json');
		}

		if ('prepareHeaders' in arg) {
			const prepareHeaders = arg.prepareHeaders as PrepareHeaders;

			prepareHeaders(headers);
		}

		return headers;
	},
	responseHandler: async (response) => {
		switch (response.status) {
			case 401: {
				console.error('Ошибка авторизации');
				window.location.assign('/logout');
				break;
			}

			case 403: {
				console.error('Доступ запрещён');
				break;
			}
		}

		if (!response.ok) {
			const error = await response.json();

			error?.errors.forEach((error: string) => {
				if ([401, 403].includes(response.status)) return;

				console.error(error);
			});

			return { error };
		}

		return response.json();
	}
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

const api = createApi({
	baseQuery: baseQueryWithRetry,
	tagTypes: ['HealthCheck'],
	endpoints: () => ({})
});

export default api;
