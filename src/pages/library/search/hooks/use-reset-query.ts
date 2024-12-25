import { useEffect } from 'react';
import useScopes from './use-scopes';
import useMatches from './use-matches';
import { useAppDispatch } from '@store';

import { actions as searchActs } from '@data/search';

const useResetQuery = () => {
	const scopes = useScopes();
	const dispatch = useAppDispatch();
	const { isCategories, isApps, isPayments } = useMatches();

	useEffect(() => {
		dispatch(searchActs.setSearch({ query: '', scopes: scopes }));
	}, [isCategories, isApps, isPayments]);
};

export default useResetQuery;
