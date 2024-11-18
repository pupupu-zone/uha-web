import React from 'react';

import Root, { Header, Main } from './settings-block.styles';

import type { Props } from './settings-block.d';

const SettingsBlock = ({ title, children }: Props) => {
	return (
		<Root>
			<Header $weight={700}>{title}</Header>

			<Main>{children}</Main>
		</Root>
	);
};
export default SettingsBlock;
