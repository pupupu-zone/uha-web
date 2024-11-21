import React from 'react';

import Root, { Title, IconRoot, IconContent } from './preview.styles';

const CategoryPreview = ({ name = '', color, emoji }) => {
	return (
		<Root $color={color}>
			<IconRoot>
				<IconContent $color={color}>{emoji || name[0]}</IconContent>
			</IconRoot>

			<Title lang="en">{name}</Title>
		</Root>
	);
};

export default CategoryPreview;
