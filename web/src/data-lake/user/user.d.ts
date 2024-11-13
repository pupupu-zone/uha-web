export type UserProfile = {
	email: string;
	user_id: string;
	name: string;
	avatar_url: string | null;
	theme: 'System' | 'Dark' | 'Light';
	default_currency: string;
	do_recalc: boolean;
};

export type UserSlice = {
	id?: UserProfile['user_id'];
	data: {
		email?: UserProfile['email'];
		name?: UserProfile['name'];
		avatar_url?: UserProfile['avatar_url'];
	};
	settings: {
		theme: UserProfile['theme'];
		default_currency: UserProfile['default_currency'];
		do_recalc: UserProfile['do_recalc'];
	};
};
