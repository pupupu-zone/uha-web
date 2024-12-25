import type { Category } from '@data/categories';

export type Props = Partial<Category>;

export type ColorStyled = {
	$color: Category['color'];
};

export type TextStyled = {
	$isTextDark: boolean;
};
