import React from 'react';

import HeaderCard from './header-card';

import Root, { Content } from './subs-list.styles';

const SubsList = () => {
	return (
		<Root>
			<HeaderCard />

			<Content>CONTENT</Content>
		</Root>
	);
};

export default SubsList;
