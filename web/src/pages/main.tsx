import React from 'react';
import { Outlet } from '@tanstack/react-router';

import { H1 } from '@ui';
import { Link } from '@tanstack/react-router';
import Root, { Navigation } from './main.styles';

const MainPage = () => {
	return (
		<Root>
			<Outlet />

			<Navigation>
				<H1 style={{ padding: '24px 12px' }} as={Link} to="/profile">
					P
				</H1>

				<H1 style={{ padding: '24px 12px' }} as={Link} to="/subs-list">
					D
				</H1>

				<H1 style={{ padding: '24px 12px' }} as={Link} to="/library">
					L
				</H1>
			</Navigation>
		</Root>
	);
};

export default MainPage;
