import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { allCategoriesSelector } from '@data/categories/selectors';
import { allPaymentsSelector } from '@data/payments/selectors';
import { allAppsSelector } from '@data/applications/selectors';
import type { Props } from './entity-picker.d';

const intervals = [
	{ id: 'day', name: 'Day' },
	{ id: 'week', name: 'Week' },
	{ id: 'fortnight', name: 'Fortnight' },
	{ id: 'month', name: 'Month' },
	{ id: 'biannual', name: 'Biannual' },
	{ id: 'annual', name: 'Annual' },
	{ id: 'biennial', name: 'Biennial' }
];
const currencies = [
	{ id: 'USD', name: 'USD' },
	{ id: 'RUB', name: 'RUB' },
	{ id: 'KZT', name: 'KZT' }
];

const ENTITY_SELECTORS = {
	categories: allCategoriesSelector,
	payment_methods: allPaymentsSelector,
	apps: allAppsSelector,
	intervals: () => intervals,
	currencies: () => currencies
};

const useEntity = (entity: Props['entity']) => {
	const selector = useMemo(() => ENTITY_SELECTORS[entity], [entity]);
	const entitiesData = useSelector((state) => (selector ? selector(state) : []));

	return entitiesData;
};

export default useEntity;
