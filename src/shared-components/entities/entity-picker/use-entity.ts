import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { allCategoriesSelector } from '@data/categories/selectors';
import { allPaymentsSelector } from '@data/payments/selectors';
import { allAppsSelector } from '@data/applications/selectors';

import type { Props } from './entity-picker.d';

// @TODO: Make it dynamic
const INTERVALS = [
	{ id: 'day', name: 'Day' },
	{ id: 'week', name: 'Week' },
	{ id: 'fortnight', name: 'Fortnight' },
	{ id: 'month', name: 'Month' },
	{ id: 'biannual', name: 'Biannual' },
	{ id: 'annual', name: 'Annual' },
	{ id: 'biennial', name: 'Biennial' }
];

// @TODO: Make it dynamic
const CURRENCIES = [
	{ id: 'USD', name: 'USD' },
	{ id: 'RUB', name: 'RUB' },
	{ id: 'KZT', name: 'KZT' }
];

const ENTITY_SELECTORS = {
	categories: allCategoriesSelector,
	payment_methods: allPaymentsSelector,
	apps: allAppsSelector,
	intervals: () => INTERVALS,
	currencies: () => CURRENCIES
};

const useEntity = (entity: Props['entity']) => {
	const selector = useMemo(() => ENTITY_SELECTORS[entity], [entity]);
	const entitiesData = useSelector((state) => (selector ? selector(state) : []));

	return entitiesData;
};

export default useEntity;
