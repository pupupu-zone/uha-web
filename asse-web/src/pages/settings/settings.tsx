import React from 'react';

import { H1, Button } from '@ui';
import Root from './settings.styles';

const SettingsPage = () => {
	return (
		<Root>
			<H1>Settings Page</H1>

			<Button to="/logout">Sign Out</Button>
		</Root>
	);
};

export default SettingsPage;
