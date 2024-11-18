import React, { useState } from 'react';

import { LargeText, Icon } from '@ui';
import { Link } from '@tanstack/react-router';
import Root, { Digits, R, R2, R3 } from './header-card.styles';

const USD = 63000.54 / 30;

const HeaderCard = () => {
	const [maximumFraction, setMaximumFraction] = useState(0);
	const [interval, setInterval] = useState(30);

	const formattedTotalPrice = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		currencyDisplay: 'narrowSymbol',
		maximumFractionDigits: maximumFraction,
		roundingPriority: 'lessPrecision'
	}).format(USD * interval);

	const toggleFraction = () => {
		const nextFraction = maximumFraction === 2 ? 0 : 2;
		setMaximumFraction(nextFraction);
	};

	return (
		<R>
			<Root>
				<Digits onClick={toggleFraction}>{formattedTotalPrice}</Digits>

				<LargeText $shade="light" onClick={() => setInterval(Math.floor(Math.random() * (365 * 5 - 7 + 1)) + 7)}>
					per {interval} days
				</LargeText>
			</Root>

			<R2>
				<R3 as={Link} aria-label="Calendar View" to="/subscriptions" search={{ view: 'calendar' }}>
					<Icon name="calendar" width={32} height={32} />
				</R3>

				<R3 as={Link} aria-label="List View" to="/subscriptions" search={{ view: 'list' }}>
					<Icon name="list" width={32} height={32} />
				</R3>
			</R2>
		</R>
	);
};

export default HeaderCard;
