export type Props = {
	logoUrl?: string;
	emoji?: string;
	name: string;
	size: number;
};

export type UseLogoT = {
	logoUrl: Props['logoUrl'];
	emoji: Props['emoji'];
	name: Props['name'];
	size: Props['size'];
};
