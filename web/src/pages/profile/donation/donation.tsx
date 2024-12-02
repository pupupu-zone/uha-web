import React from 'react';

import { SettingsBlock, SettingsEntry } from '@pages/profile/_components';

const Donation = () => {
	const onOpen = () => {
		console.log('STUB STUB STUB');
	};

	return (
		<SettingsBlock title="Donation">
			<SettingsEntry onPress={onOpen} left="Tier 1" right="$ 5" />
			<SettingsEntry onPress={onOpen} left="Tier 2" right="$ 10" />
			<SettingsEntry onPress={onOpen} left="Tier 3" right="$ 20" />
		</SettingsBlock>
	);
};

export default Donation;
