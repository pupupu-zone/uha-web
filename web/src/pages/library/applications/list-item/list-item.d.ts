import type { Application } from '@data/applications';

export type Props = Application;

export type UseLogoT = {
	logoUrl: Props['logo_url'];
	emoji: Props['emoji'];
	name: Props['name'];
};
