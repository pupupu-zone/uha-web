import API from '@api';

import type { InitRecoveryResT, InitRecoveryReqT, VerifyEmailReqT, VerifyEmailResT } from './api.d';

const idApi = API.injectEndpoints({
	endpoints: (build) => ({
		// Request to initiate password recovery
		initiateRecovery: build.query<InitRecoveryResT, InitRecoveryReqT>({
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
