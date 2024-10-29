import React from 'react';

import { Link } from '@tanstack/react-router';

import HealthCheck from '@features/healthcheck';
import Root from './main.styles';

const Main = () => {
	return (
		<Root>
			<h1>Hello</h1>

			<HealthCheck />

			<Link to="/id/register">Register</Link>
		</Root>
	);
};

export default Main;
