import API from '@api';

import type { RegistrationReqT, RegistrationResT, VerifyEmailReqT, VerifyEmailResT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Register
		register: build.query<RegistrationResT, RegistrationReqT>({
			query: (body) => ({
				url: '/auth/sign-up',
				method: 'POST',
				credentials: 'omit',
				body
			})
		}),

		// Verify E-Mail from the letter
		verifyEmail: build.query<VerifyEmailResT, VerifyEmailReqT>({
			query: (body) => ({
				url: '/auth/validate',
				method: 'POST',
				credentials: 'omit',
				body
			})
		}),

		// Send verifying email once again
		resendEmail: build.query<VerifyEmailResT, VerifyEmailReqT>({
			query: (body) => ({
				url: '/auth/regenerate-token',
				method: 'POST',
				credentials: 'omit',
				body
			})
		})
	})
});

export default idApi;
