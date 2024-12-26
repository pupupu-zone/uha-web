import React from 'react';

import { useShallFill } from '@hooks';

import { Outlet, useChildMatches } from '@tanstack/react-router';
import Root from './entities.styles';

const EntitiesPage = () => {
	const children = useChildMatches();
	const [rootRef, shallFill] = useShallFill([children]);

	return (
		<Root ref={rootRef} $shouldFill={shallFill}>
			<Outlet />
		</Root>
	);
};

export default EntitiesPage;
