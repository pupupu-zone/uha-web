import React from 'react';
import { useSelector } from 'react-redux';

import { allSubsSelector } from '@data/subscriptions/selectors';

import SubCard from '../sub-card';
import Root from './list-view.styles';

const ListView = () => {
	const subsList = useSelector(allSubsSelector);

	return (
		<Root>
			{subsList.map((subscription) => (
				<SubCard key={subscription.id} {...subscription} />
			))}
		</Root>
	);
};

export default ListView;
