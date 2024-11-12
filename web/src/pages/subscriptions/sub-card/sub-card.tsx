import React from 'react';
import { DateTime } from 'luxon';

import { H2, H3, SmallText } from '@ui';
import Root, { SupportImage, Information } from './sub-card.styles';

type Props = {
	imgSrc: string;
	title: string;
	price: string;
	nextDate?: string;
};

const SubCard = ({ imgSrc, title, nextDate, price }: Props) => {
	return (
		<Root>
			<SupportImage>
				<img src={imgSrc} alt={title} />
			</SupportImage>

			<Information>
				<H3>{title}</H3>

				{nextDate && <SmallText>{DateTime.fromISO(nextDate).toFormat('dd LLL yyyy')}</SmallText>}
			</Information>

			<H2>{price}</H2>
		</Root>
	);
};

export default SubCard;
