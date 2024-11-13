import React from 'react';

import { H1 } from '@ui';
import SubCard from '../sub-card';
import Root from './list-view.styles';

import stubs from '../stubs';

const ListView = () => {
	return (
		<Root>
			<H1>November</H1>

			{stubs.map(({ country, date, price, flag }) => (
				<SubCard key={country} imgSrc={flag} title={country} price={price} nextDate={date} />
			))}
		</Root>
	);
};

export default ListView;
