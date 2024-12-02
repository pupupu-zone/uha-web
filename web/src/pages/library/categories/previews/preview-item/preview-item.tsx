import React from 'react';

import { useIsTextDark } from '@hooks';
import Root, { Title, IconRoot, IconContent } from './preview-item.styles';

import type { Props } from './preview-item.d';

const PreviewItem = ({ name = '', color = '#e74c3c', emoji }: Props) => {
	const isTextDark = useIsTextDark(color, 0.5);

	return (
		<Root $color={color}>
			<IconRoot>
				<IconContent $color={color}>{emoji || name[0] || '?'}</IconContent>
			</IconRoot>

			<Title lang="en" $isTextDark={isTextDark}>
				{name || 'No Data'}
			</Title>
		</Root>
	);
};

export default PreviewItem;
