import React from 'react';

import { LargeText } from '@ui';
import Root from './previews.styled';

const Category = ({ title, color }) => {
	return (
		<Root $color={color}>
			<LargeText>{title}</LargeText>
		</Root>
	);
};

export default Category;
