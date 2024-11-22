import React from 'react';

import { useIsTextDark } from '@hooks';
import Root, { Title, IconRoot, IconContent } from './preview.styles';

const CategoryPreview = ({ name = '', color, emoji }) => {
	const isTextDark = useIsTextDark(color, 0.5);

	return (
		<Root $color={color}>
			<IconRoot>
				<IconContent $color={color}>{emoji || name[0] || '?'}</IconContent>
			</IconRoot>

			<Title lang="en" $isTextDark={isTextDark}>
				{name}
			</Title>
		</Root>
	);
};

export default CategoryPreview;
