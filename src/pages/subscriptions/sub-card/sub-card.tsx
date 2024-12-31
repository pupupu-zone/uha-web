import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useLocale } from '@utils/hooks';

import { paymentSelector } from '@data/payments/selectors';
import { appSelector } from '@data/applications/selectors';
import { categorySelector } from '@data/categories/selectors';
import { settingsSelector } from '@data/settings/selectors';
import { subscriptionByIdSelector } from '@data/subscriptions/selectors';

import { H2, H3, SmallText } from '@ui';
import LogoContent from '@shared/logotype';
import Root, { LogoWrap, Information } from './sub-card.styles';

import type { Subscription } from '@data/subscriptions';

type Props = {
	id: Subscription['id'];
};

const SubCard = ({ id }: Props) => {
	const locale = useLocale();
	const settings = useSelector(settingsSelector);
	const { app_id, category_id, price, currency, payment_method_id } = useSelector((store) =>
		subscriptionByIdSelector(store, id)
	);
	const app = useSelector((store) => appSelector(store, app_id));
	const category = useSelector((store) => categorySelector(store, category_id));
	const paymentMethod = useSelector((store) => paymentSelector(store, payment_method_id));

	const formattedPrice = useMemo(() => {
		const result = new Intl.NumberFormat(locale, {
			style: 'currency',
			currency,
			minimumFractionDigits: 0,
			maximumFractionDigits: settings.show_fractions ? 2 : 0
		}).format(price);

		return result;
	}, [price, currency, locale]);

	if (!app) {
		return null;
	}

	return (
		<Root>
			<LogoWrap>
				<LogoContent logoUrl={app.logo_url} emoji={category.emoji} name={app.name} size={48} />
			</LogoWrap>

			<Information>
				<H3 $weight={500}>{app.name}</H3>

				<SmallText>{paymentMethod.name}</SmallText>
			</Information>

			<H2 $weight={400}>{formattedPrice}</H2>
		</Root>
	);
};

export default React.memo(SubCard);
