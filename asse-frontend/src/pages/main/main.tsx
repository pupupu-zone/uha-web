import React from 'react';

import HealthCheck from '@features/healthcheck';
import Root from './main.styles';

const Main = () => {
	return (
		<Root>
			<h1>Welcome to the app</h1>

			<HealthCheck />
		</Root>
	);
};

export default Main;
