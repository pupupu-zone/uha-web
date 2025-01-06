import React from 'react';
import { useSelector } from 'react-redux';

import usePrice from './use-price';

import { paymentSelector } from '@data/payments/selectors';
import { appSelector } from '@data/applications/selectors';
import { categorySelector } from '@data/categories/selectors';
import { subscriptionByIdSelector } from '@data/subscriptions/selectors';

import { LargeText, H3, SmallText, LogoView } from '@ui';
import Root, { LogoWrap, TextInfo, TextRow } from './subscription-card.styles';

import type { Props } from './subscription-card.d';

const SubCard = ({ id }: Props) => {
	const formattedPrice = usePrice(id);
	const { app_id, category_id, payment_method_id } = useSelector((store) => subscriptionByIdSelector(store, id));
	const app = useSelector((store) => appSelector(store, app_id));
	const category = useSelector((store) => categorySelector(store, category_id));
	const paymentMethod = useSelector((store) => paymentSelector(store, payment_method_id));

	if (!app || !category || !paymentMethod) {
		return null;
	}

	return (
		<Root>
			<LogoWrap>
				<LogoView logoUrl={app.logo_url} emoji={category.emoji} name={app.name} size={48} />
			</LogoWrap>

			<TextInfo>
				<TextRow>
					<H3 $weight={500}>{app.name}</H3>

					<LargeText $weight={500}>{formattedPrice}</LargeText>
				</TextRow>

				<TextRow>
					<SmallText>{category.name}</SmallText>

					<SmallText>{paymentMethod.name}</SmallText>
				</TextRow>
			</TextInfo>
		</Root>
	);
};

export default React.memo(SubCard);
