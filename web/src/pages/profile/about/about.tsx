import React from 'react';
import { useStorage } from '@hooks';

import { SettingsBlock, SettingsEntry } from '@pages/profile/_components';

const About = () => {
	const [storage, isSupported] = useStorage();

	const onPressHd = () => {
		console.log('Pressed');
	};

	return (
		<SettingsBlock title="About">
			<SettingsEntry onPress={onPressHd} left="Terms of Service" />
			<SettingsEntry onPress={onPressHd} left="Privacy Policy" />

			{isSupported && <SettingsEntry left="Space used" right={storage.usage} />}
		</SettingsBlock>
	);
};

export default About;
