import React from 'react';
import { useStorage } from '@hooks';

import { SettingsBlock, SettingsEntry } from '@pages/profile/_components';

const About = () => {
	const [storage, isSupported] = useStorage();

	return (
		<SettingsBlock title="About">
			{isSupported && <SettingsEntry left="Space used" right={storage.usage} />}
		</SettingsBlock>
	);
};

export default About;
