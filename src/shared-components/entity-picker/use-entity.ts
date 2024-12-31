import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { allCategoriesSelector } from '@data/categories/selectors';
import { allPaymentsSelector } from '@data/payments/selectors';
import { allAppsSelector } from '@data/applications/selectors';
import type { Props } from './entity-picker.d';

const ENTITY_SELECTORS = {
	categories: allCategoriesSelector,
	payment_methods: allPaymentsSelector,
	apps: allAppsSelector
};

const useEntity = (entity: Props['entity']) => {
	const selector = useMemo(() => ENTITY_SELECTORS[entity], [entity]);
	const entitiesData = useSelector((state) => (selector ? selector(state) : []));

	return entitiesData;
};

export default useEntity;
