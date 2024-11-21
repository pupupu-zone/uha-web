import React from 'react';

import Root, { Title, IconRoot, IconContent } from './preview.styles';

const CategoryPreview = ({ title, color, emoji }) => {
	return (
		<Root $color={color}>
			<IconRoot>
				<IconContent $color={color}>{emoji || title[0]}</IconContent>
			</IconRoot>

			<Title lang="en">{title}</Title>
		</Root>
	);
};

export default CategoryPreview;
