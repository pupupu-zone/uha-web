import React from 'react';

import { Icon, LogoView, LargeText } from '@ui';
import Root from './entity-preview.styles';
import type { Props } from './entity-preview.d';

const EntityPreview = ({ name, color, emoji, logoUrl }: Props) => {
	console.log(name, color, emoji, logoUrl);

	return (
		<Root>
			<LogoView name={name} emoji={emoji} logoUrl={logoUrl} color={color} size={48} />

			<LargeText>{name}</LargeText>

			<Icon name="arrow-down" width={18} height={18} />
		</Root>
	);
};

export default EntityPreview;
