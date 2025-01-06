import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useLocale } from '@utils/hooks';

import { settingsSelector } from '@data/settings/selectors';
import { subscriptionByIdSelector } from '@data/subscriptions/selectors';

import type { Props } from './subscription-card.d';

const usePrice = (id: Props['id']) => {
	const locale = useLocale();
	const settings = useSelector(settingsSelector);
	const { price, currency } = useSelector((store) => subscriptionByIdSelector(store, id));

	const formattedPrice = useMemo(() => {
		const result = new Intl.NumberFormat(locale, {
			style: 'currency',
			currency,
			minimumFractionDigits: 0,
			maximumFractionDigits: settings.show_fractions ? 2 : 0
		}).format(price);

		return result;
	}, [price, currency, locale]);

	return formattedPrice;
};

export default usePrice;
