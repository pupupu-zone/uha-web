import React from 'react';
import { ScrollRestoration, Outlet } from '@tanstack/react-router';

import Navigation from '@features/navigation';
import Root from './main.styles';

const MainPage = () => {
	return (
		<Root>
			<ScrollRestoration getKey={(location) => location.pathname} />
			<Outlet />

			<Navigation />
		</Root>
	);
};

export default MainPage;
