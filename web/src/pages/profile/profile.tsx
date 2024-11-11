import React from 'react';
import { useLocation } from '@tanstack/react-router';
import { H1, Button } from '@ui';

import Root from './profile.styles';

const Profile = () => {
	const location = useLocation();

	return (
		<Root>
			<H1>Profile Page</H1>

			<Button
				to="/logout"
				search={{
					from: location
				}}
			>
				Sign Out
			</Button>
		</Root>
	);
};

export default Profile;
