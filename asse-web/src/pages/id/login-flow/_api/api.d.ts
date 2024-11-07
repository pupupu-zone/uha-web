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
