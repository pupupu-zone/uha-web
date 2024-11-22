import React from 'react';

import { useBrokenImg, useIsTextDark } from '@hooks';

import { Text } from '@ui';
import Root, { IconWrap, IconContent, Broken } from './preview.styles';

const AppPreview = ({ name, color, logo_url }) => {
	const isTextDark = useIsTextDark(color, 0.8);
	const { imageRef, isImageBroken, isImageLoading } = useBrokenImg();

	return (
		<Root $color={color}>
			<IconWrap>
				{isImageBroken && (
					<Broken $color={color} $isTextDark={isTextDark}>
						{name[0]}
					</Broken>
				)}
				{logo_url && (!isImageBroken || isImageLoading) && <IconContent ref={imageRef} src={logo_url} alt={name} />}
			</IconWrap>

			{name && <Text $align="center">{name}</Text>}
		</Root>
	);
};

export default AppPreview;
