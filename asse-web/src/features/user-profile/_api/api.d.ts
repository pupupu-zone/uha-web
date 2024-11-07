// Get user's profile
export type UserProfileReqT = void;
export type UserProfileResT = {
	status: 'success' | 'error';
	data: {
		email: string;
		user_id: string; // UUIDv4
		name: string;
		avatar_url: string | null;
		theme: 'light' | 'dark' | 'system';
		default_currency: string; // USD
		do_recalc: boolean;
	};
};
