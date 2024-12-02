import React, { useState, useId } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@store';

import { useLabel, useScopes, useResetQuery } from './hooks';
import { actions as searchActs } from '@data/search';
import { searchQuerySelector } from '@data/search/selectors';

import { Icon } from '@ui';
import Root, { SearchLabel, SearchInput } from './search.styles';

const Search = () => {
	useResetQuery();
	const id = useId();
	const dispatch = useAppDispatch();

	const label = useLabel();
	const scopes = useScopes();
	const [isFocused, setIsFocused] = useState(false);
	const searchQuery = useSelector(searchQuerySelector);

	const onFocusHd = () => setIsFocused(true);
	const onBlurHd = () => setIsFocused(false);

	const onInputHd = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(searchActs.setSearch({ query: e.target.value, scopes }));
	};

	return (
		<Root $isFocused={isFocused}>
			<SearchLabel htmlFor={id}>
				<Icon name="search" width={22} height={22} />
			</SearchLabel>

			<SearchInput
				id={id}
				type="search"
				placeholder={label}
				onFocus={onFocusHd}
				onBlur={onBlurHd}
				onInput={onInputHd}
				value={searchQuery}
			/>
		</Root>
	);
};

export default Search;
