import idApi from './_api';

export const {
	useLazyLoginQuery,
	useLazyLogoutQuery,
	useLazyRegisterQuery,
	useLazyVerifyEmailQuery,
	useLazyNewTokenQuery,
	useLazyInitiateRecoveryQuery,
	useLazyVerifyRecoveryQuery,
	useLazySetNewPasswordQuery
} = idApi;