export type UserProfile = {
	email: string;
	user_id: string;
	name: string;
	avatar_url: string | null;
	theme: 'System' | 'Dark' | 'Light';
	default_currency: string;
	do_recalc: boolean;
};
