import React from 'react';

import { H1, Button } from '@ui';

import Root from './profile.styles';

const Profile = () => {
	return (
		<Root>
			<H1>Profile Page</H1>

			<Button to="/logout">Sign Out</Button>
		</Root>
	);
};

export default Profile;
