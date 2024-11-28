import React from 'react';

import { Icon } from '@ui';
import Root from './search.styles';

const Search = () => {
	return (
		<Root>
			<Icon name="search" />

			<input type="search" placeholder="Search for all" />
		</Root>
	);
};

export default Search;
