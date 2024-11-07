import API from '@api';

import type { LogoutResT, LogoutReqT, RegisterReqT, RegisterResT, VerifyEmailReqT, VerifyEmailResT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Logout
		logout: build.query<LogoutResT, LogoutReqT>({
			query: () => ({
				url: '/auth/sign-out',
				credentials: 'include',
				method: 'DELETE'
			})
		}),

		// Register
		register: build.query<RegisterResT, RegisterReqT>({
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
		newToken: build.query<VerifyEmailResT, VerifyEmailReqT>({
			query: (body) => ({
				url: '/auth/regenerate-token',
				method: 'POST',
				credentials: 'omit',
				body
			})
		}),

		// Request to initiate password recovery
		initiateRecovery: build.query<VerifyEmailResT, VerifyEmailReqT>({
			query: (body) => ({
				url: '/user/password-change/init',
				method: 'POST',
				credentials: 'omit',
				body
			})
		}),

		// Verify token for password recovery
		verifyRecovery: build.query<VerifyEmailResT, VerifyEmailReqT>({
			query: (body) => ({
				url: '/user/password-change/verify',
				method: 'POST',
				credentials: 'omit',
				body
			})
		}),

		// Set new password
		setNewPassword: build.query<VerifyEmailResT, VerifyEmailReqT>({
			query: (body) => ({
				url: '/user/password-change/set',
				method: 'POST',
				credentials: 'omit',
				body
			})
		})
	})
});

export default idApi;
