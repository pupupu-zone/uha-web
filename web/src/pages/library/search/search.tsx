import React, { useState, useId } from 'react';
import { useMatchRoute } from '@tanstack/react-router';

import { Icon } from '@ui';
import Root, { SearchLabel, SearchInput } from './search.styles';

const Search = () => {
	const id = useId();
	const label = useLabel();
	const [isFocused, setIsFocused] = useState(false);

	const onFocusHd = () => setIsFocused(true);
	const onBlurHd = () => setIsFocused(false);

	return (
		<Root $isFocused={isFocused}>
			<SearchLabel htmlFor={id}>
				<Icon name="search" width={22} height={22} />
			</SearchLabel>

			<SearchInput id={id} type="search" placeholder={label} onFocus={onFocusHd} onBlur={onBlurHd} />
		</Root>
	);
};

const useLabel = () => {
	const match = useMatchRoute();

	const isCategories = match({ to: '/library/categories' });
	const isApps = match({ to: '/library/applications' });
	const isPayments = match({ to: '/library/payments' });

	if (isCategories) return 'Search in categories';
	if (isApps) return 'Search in applications';
	if (isPayments) return 'Search in payments';

	return 'Search everywhere';
};

export default Search;
