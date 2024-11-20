import React from 'react';

import Root, { Title, IconRoot, LetterFallback } from './previews.styled';

const Category = ({ title, color, emoji }) => {
	return (
		<Root $color={color}>
			<IconRoot>
				<LetterFallback>{emoji || title[0]}</LetterFallback>
			</IconRoot>
			<Title>{title}</Title>
		</Root>
	);
};

export default Category;
