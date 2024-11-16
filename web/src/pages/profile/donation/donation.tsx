import React from 'react';

import { SettingsBlock, SettingsEntry } from '@pages/profile/_components';

const Donation = () => {
	const onOpen = () => {
		console.log('STUB STUB STUB');
	};

	return (
		<SettingsBlock title="Donation">
			<SettingsEntry onPress={onOpen} left="1 week" right="$ 18" />
			<SettingsEntry onPress={onOpen} left="2 weeks" right="$ 36" />
			<SettingsEntry onPress={onOpen} left="1 month" right="$ 78" />
			<SettingsEntry onPress={onOpen} left="3 months" right="$ 235" />
			<SettingsEntry onPress={onOpen} left="6 months" right="$ 465" />
		</SettingsBlock>
	);
};

export default Donation;
