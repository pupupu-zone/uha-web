import React from 'react';

import { SettingsBlock, SettingsEntry } from '@pages/profile/_components';

const About = () => {
	const onPressHd = () => {
		console.log('Pressed');
	};

	return (
		<SettingsBlock title="About">
			<SettingsEntry onPress={onPressHd} left="Terms of Service" />
			<SettingsEntry onPress={onPressHd} left="Privacy Policy" />
		</SettingsBlock>
	);
};

export default About;
