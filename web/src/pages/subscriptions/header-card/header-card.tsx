import React, { useState } from 'react';

import { LargeText } from '@ui';
import Root, { Digits } from './header-card.styles';

const USD = 63000.54 / 30;

const HeaderCard = () => {
	const [max, setMax] = useState(0);
	const [interval, setInterval] = useState(30);

	const cur = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		currencyDisplay: 'narrowSymbol',
		minimumFractionDigits: 0,
		maximumFractionDigits: max,
		roundingPriority: 'lessPrecision'
	}).format(USD * interval);

	return (
		<Root>
			<Digits onClick={() => setMax(max === 2 ? 0 : 2)}>{cur}</Digits>

			<LargeText $shade="light" onClick={() => setInterval(Math.floor(Math.random() * (365 - 7 + 1)) + 7)}>
				per {interval} days
			</LargeText>
		</Root>
	);
};

export default HeaderCard;
