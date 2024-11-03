import React from 'react';

import { Link } from '@tanstack/react-router';

import HealthCheck from '@features/healthcheck';
import UpdateUser from '@features/user-profile';
import Root from './main.styles';

const Main = () => {
	return (
		<Root>
			<h1>Hello</h1>

			<HealthCheck />

			<UpdateUser />

			<Link to="/id/register">Register!1</Link>
		</Root>
	);
};

export default Main;
