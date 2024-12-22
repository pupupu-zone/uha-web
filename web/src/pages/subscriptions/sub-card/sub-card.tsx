import React, { useMemo } from 'react';
import { DateTime } from 'luxon';
import { useSelector } from 'react-redux';

import { useLocale } from '@utils/hooks';

import { appSelector } from '@data/applications/selectors';
import { categorySelector } from '@data/categories/selectors';

import { H2, H3, SmallText } from '@ui';
import LogoContent from '@features/logotype';
import Root, { LogoWrap, Information } from './sub-card.styles';

import type { Subscription } from '@data/subscriptions';

type Props = Subscription;

const SubCard = ({ app_id, category_id, price, currency, next_payment }: Props) => {
	const locale = useLocale();
	const app = useSelector((store) => appSelector(store, app_id));
	const category = useSelector((store) => categorySelector(store, category_id));

	const formattedPrice = useMemo(() => {
		const result = new Intl.NumberFormat(locale, {
			style: 'currency',
			currency,
			currencyDisplay: 'narrowSymbol',
			minimumFractionDigits: 0,
			maximumFractionDigits: 2
		}).format(price);

		return result;
	}, [price, currency, locale]);

	return (
		<Root>
			<LogoWrap>
				<LogoContent logoUrl={app.logo_url} emoji={category.emoji} name={app.name} size={48} />
			</LogoWrap>

			<Information>
				<H3>{app.name}</H3>

				{next_payment && <SmallText>{DateTime.fromISO(next_payment).toFormat('dd LLL yyyy')}</SmallText>}
			</Information>

			<H2 $weight={500}>{formattedPrice}</H2>
		</Root>
	);
};

export default React.memo(SubCard);
