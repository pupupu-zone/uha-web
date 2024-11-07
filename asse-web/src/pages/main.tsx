import React from 'react';
import { Outlet } from '@tanstack/react-router';

import { Button } from '@ui';
import Root, { Links } from './main.styles';

const MainPage = () => {
	return (
		<Root>
			<Outlet />

			<Links>
				<Button to="/profile">Profile</Button>
				<Button to="/subs-list">Main</Button>
				<Button to="/library">Library</Button>
			</Links>
		</Root>
	);
};

export default MainPage;
