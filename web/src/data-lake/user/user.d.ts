export type UserProfile = {
	email: string;
	user_id: string;
	name: string;
	avatar_url: string | null;
	theme: 'System' | 'Dark' | 'Light';
	default_currency: string;
	recalc_currency: string;
	language: string;
};

export type UserSlice = {
	id?: UserProfile['user_id'];
	email?: UserProfile['email'];
	name?: UserProfile['name'];
	avatar_url?: UserProfile['avatar_url'];
};
