import React from 'react';

import { H3, Icon } from '@ui';
import Root, { LeftEntry, RightEntry } from './settings-entry.styles';
import type { Props } from './settings-entry.d';

const SettingsEntry = ({ left, right, ...props }: Props) => {
	return (
		<Root {...props}>
			<LeftEntry>
				<H3 $weight={400}>{left}</H3>
			</LeftEntry>

			{right && (
				<RightEntry>
					<H3 $weight={400}>{right}</H3>
					<Icon name="arrow-right" width={18} height={18} />
				</RightEntry>
			)}
		</Root>
	);
};

export default SettingsEntry;
