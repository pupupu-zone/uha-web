type LinksT = {
	referral?: string;
	promo?: string;
	homepage?: string;
};

export type Application = {
	id: string;
	user_id: string;
	category_id: string;
	name: string;
	logo_url?: string;
	color: string;
	aliases: string[];
	links: LinksT;
	is_default: boolean;
	is_dead: boolean;
};

export type ApplicationsSlice = {
	byId: Record<string, Application>;
	allIds: string[];
};
