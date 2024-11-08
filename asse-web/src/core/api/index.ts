import toast from 'react-hot-toast';
import { createApi, fetchBaseQuery, retry, FetchArgs } from '@reduxjs/toolkit/query/react';

import { isPlainObject } from '@utils';
import errorCodes from './error-codes';

type PrepareHeaders = (headers: Headers) => Headers;

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
	prepareHeaders: (headers, { arg }) => {
		arg = arg as FetchArgs;

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
		if (response.ok) return response.json();

		const errorResponse = await response.json();
		const errorMessage = errorCodes.get(errorResponse?.code) || errorResponse.code || response.statusText;

		toast.error(errorMessage);

		return {
			code: response.status,
			message: errorMessage
		};
	}
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

const api = createApi({
	baseQuery: baseQueryWithRetry,
	tagTypes: [],
	endpoints: () => ({})
});

export default api;
