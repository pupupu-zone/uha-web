import React from 'react';
import { Outlet } from '@tanstack/react-router';

import Root from './main.styles';

const MainPage = () => {
	return (
		<Root>
			<Outlet />
		</Root>
	);
};

export default MainPage;
