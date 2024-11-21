import React from 'react';

import Root, { IconWrap } from './preview.styles';

const AppPreview = ({ name, color, logo_url }) => {
	return (
		<Root $color={color}>
			<IconWrap>
				<img src={logo_url} alt={name} />
			</IconWrap>
		</Root>
	);
};

export default AppPreview;
