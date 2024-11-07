import React from 'react';
import { Outlet } from '@tanstack/react-router';

import { Button } from '@ui';
import Root, { Links } from './main.styles';

const MainPage = () => {
	return (
		<Root>
			<Outlet />

			<Links>
				<Button to="/app/profile">Profile</Button>
				<Button to="/app/subs-list">Subs List</Button>
				<Button to="/app/settings">Settings</Button>
			</Links>
		</Root>
	);
};

export default MainPage;
