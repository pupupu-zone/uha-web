import React, { useState } from 'react';

import { LargeText, Icon } from '@ui';
import Root, { Root2, Costs, Digits, StubSelect } from './header-card.styles';

const USD = 63.54 / 30;

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
		<>
			<Root>
				<Costs>
					<Digits onClick={() => setMax(max === 2 ? 0 : 2)}>{cur}</Digits>

					<LargeText $shade="light" onClick={() => setInterval(Math.floor(Math.random() * (365 - 7 + 1)) + 7)}>
						per {interval} days
					</LargeText>
				</Costs>
			</Root>
			{/*
			<Root2>
				<svg width="100%" height="20" style={{ borderRadius: '10px' }}>
					<rect x="0%" y="0" width="30%" height="20" fill="#ff9999" />
					<rect x="30%" y="0" width="25%" height="20" fill="#66b3ff" />
					<rect x="55%" y="0" width="15%" height="20" fill="#99ff99" />
					<rect x="70%" y="0" width="10%" height="20" fill="#ffcc99" />
					<rect x="80%" y="0" width="20%" height="20" fill="#c2c2f0" />
				</svg>
			</Root2> */}
		</>
	);
};

export default HeaderCard;
