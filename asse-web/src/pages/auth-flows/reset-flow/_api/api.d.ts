// Send E-Mail to requested address
export type InitRecoveryReqT = {
	email: string;
};
export type InitRecoveryResT = {
	message: string;
	status: string;
};

// Verify token received in previous step
export type VerifyRecoveryReqT = {
	token: string;
};
export type VerifyRecoveryResT = {
	data: {
		token: string;
	};
	message: string;
	status: string;
};

// Set new password
export type SetNewPassReqT = {
	token: string;
	password: string;
};
export type SetNewPassResT = {
	message: string;
	status: string;
};
