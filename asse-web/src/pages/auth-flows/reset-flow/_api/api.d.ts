// Send E-Mail to requested address
export type InitRecoveryReqT = {
	email: string;
};
export type InitRecoveryResT = {
	message: string;
	status: string;
};

export type VerifyEmailReqT = {
	token: string;
};
export type VerifyEmailResT = unknown;
