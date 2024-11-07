// Login
export type LoginReqT = {
	email: string;
	password: string;
};
export type LoginResT = {
	data: {
		user_id: string;
	};
};

// Logout
export type LogoutReqT = void;
export type LogoutResT = {
	info: {
		system: string;
	};
};

// Register
export type RegisterReqT = {
	name: string;
	email: string;
	password: string;
};
export type RegisterResT = unknown;

// Verify E-Mail
export type VerifyEmailReqT = {
	token: string;
};
export type VerifyEmailResT = unknown;
