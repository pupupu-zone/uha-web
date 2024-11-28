import type { Application } from '@data/applications';

export type Props = Application;

export type ColorStyled = {
	$color: Application['color'];
};

export type TextStyled = {
	$isTextDark: boolean;
};
