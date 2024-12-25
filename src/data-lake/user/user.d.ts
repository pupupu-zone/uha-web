export type UserProfile = {
	login: string;
	user_id: string;
	name: string;
	avatar_url: string | null;
	theme: 'System' | 'Dark' | 'Light';
	default_currency: string;
	recalc_currency: string;
	show_fractions: boolean;
	language: string;
};

export type UserSlice = {
	id?: UserProfile['user_id'];
	login?: UserProfile['login'];
	name?: UserProfile['name'];
	avatar_url?: UserProfile['avatar_url'];
};
