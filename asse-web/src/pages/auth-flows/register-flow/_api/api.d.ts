// Register
export type RegistrationReqT = {
	name: string;
	email: string;
	password: string;
};
export type RegistrationResT = {
	code: 1001 | 1002 | 1006 | 1007 | 2000;
};

// Verify E-Mail
export type VerifyEmailReqT = {
	token: string;
};
export type VerifyEmailResT = {
	status: string;
	info: {
		verification: string;
	};
};

// Resend E-Mail
export type ResendEmailReqT = {
	email: string;
};
export type ResendEmailResT = {
	info: {
		user: string;
	};
	errors: {
		email: string;
	};
};
