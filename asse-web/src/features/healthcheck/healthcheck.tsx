import React from 'react';

import { useLazyGetHealthCheckQuery } from '@features/healthcheck/api';

const HealthCheck = () => {
	const [refetch, result] = useLazyGetHealthCheckQuery();

	return (
		<div>
			<h1>HealthCheck</h1>

			<p>{result.currentData?.text}</p>

			<button onClick={() => refetch()}>Refetch</button>
		</div>
	);
};

export default HealthCheck;
