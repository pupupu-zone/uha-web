import React from 'react';

import { H2, Text } from '@ui';
import Root from './settings-block.styles';

import type { Props } from './settings-block.d';

const SettingsBlock = ({ title, children }: Props) => {
	return (
		<Root>
			<H2 $weight={700}>{title}</H2>

			<Text>{children}</Text>
		</Root>
	);
};
export default SettingsBlock;
