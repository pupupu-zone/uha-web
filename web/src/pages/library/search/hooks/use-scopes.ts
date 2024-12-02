import { useMemo } from 'react';
import useMatches from './use-matches';

import type { ScopesT } from '@data/search';

const useScopes = () => {
	const { isCategories, isApps, isPayments } = useMatches();

	const scopes = useMemo((): ScopesT => {
		if (isCategories) return ['categories'];
		if (isApps) return ['applications'];
		if (isPayments) return ['payments'];

		return ['categories', 'applications', 'payments'];
	}, [isCategories, isApps, isPayments]);

	return scopes;
};

export default useScopes;
