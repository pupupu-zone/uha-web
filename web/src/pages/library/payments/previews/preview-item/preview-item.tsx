import React from 'react';

import { useIsTextDark } from '@hooks';

import { SmallText } from '@ui';
import Root, { Title, IconRoot, IconContent, Head, Body } from './preview-item.styles';

import type { Payment } from '@data/payments';

const PaymentPreview = ({ name, color, comment, emoji }: Payment) => {
	const isTextDark = useIsTextDark(color, 0.5);

	return (
		<Root $color={color}>
			<Head>
				<IconRoot>
					<IconContent $color={color}>{emoji || name[0] || '?'}</IconContent>
				</IconRoot>

				<Title $isTextDark={isTextDark}>{name}</Title>
			</Head>

			<Body>
				<SmallText>{comment}</SmallText>
			</Body>
		</Root>
	);
};

export default PaymentPreview;
