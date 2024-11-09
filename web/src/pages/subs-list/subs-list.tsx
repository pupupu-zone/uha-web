import React from 'react';

import { Button } from '@ui';
import HeaderCard from './header-card';
import Root, { Content } from './subs-list.styles';

const SubsList = () => {
	return (
		<Root>
			<HeaderCard />

			<Content>
				CONTENT
				<Button to="/logout">Sign Out</Button>
			</Content>
		</Root>
	);
};

export default SubsList;
