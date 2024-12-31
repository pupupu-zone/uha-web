import React from 'react';

import { LogoView, LargeText } from '@ui';
import Root from './entity-preview.styles';
import type { Props } from './entity-preview.d';

const EntityPreview = ({ name, color, emoji, logoUrl }: Props) => {
	console.log(name, color, emoji, logoUrl);

	return (
		<Root>
			<LogoView name={name} emoji={emoji} logoUrl={logoUrl} color={color} size={48} />

			<LargeText>{name}</LargeText>
		</Root>
	);
};

export default EntityPreview;
