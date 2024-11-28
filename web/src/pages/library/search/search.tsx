import React, { useState, useId } from 'react';

import { Icon } from '@ui';
import Root, { SearchLabel, SearchInput } from './search.styles';

const Search = () => {
	const id = useId();
	const [isFocused, setIsFocused] = useState(false);

	const onFocusHd = () => setIsFocused(true);
	const onBlurHd = () => setIsFocused(false);

	return (
		<Root $isFocused={isFocused}>
			<SearchLabel htmlFor={id}>
				<Icon name="search" />
			</SearchLabel>

			<SearchInput id={id} type="search" placeholder="Search for all" onFocus={onFocusHd} onBlur={onBlurHd} />
		</Root>
	);
};

export default Search;
