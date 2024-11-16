import React from 'react';

import Root, { Header } from './settings-block.styles';

import type { Props } from './settings-block.d';

const SettingsBlock = ({ title, children }: Props) => {
	return (
		<Root>
			<Header $weight={700}>{title}</Header>

			{children}
		</Root>
	);
};
export default SettingsBlock;
