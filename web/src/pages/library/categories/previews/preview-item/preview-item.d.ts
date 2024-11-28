import type { Category } from '@data/categories';

export type Props = Category;

export type ColorStyled = {
	$color: Category['color'];
};

export type TextStyled = {
	$isTextDark: boolean;
};
