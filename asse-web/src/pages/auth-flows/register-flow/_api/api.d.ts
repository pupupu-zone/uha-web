// Register
export type RegistrationReqT = {
	name: string;
	email: string;
	password: string;
};
export type RegistrationResT = {
	data: {
		user_id: string;
	};
	info: {
		user: string;
		verification: string;
	};
};

// Verify E-Mail
export type VerifyEmailReqT = {
	token: string;
};
export type VerifyEmailResT = unknown;
