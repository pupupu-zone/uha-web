import React, { useState } from 'react';

import { LargeText, Icon } from '@ui';
import { Link } from '@tanstack/react-router';
import Root, { Title, Costs, Digits, Navigation, Profile, Library, StubSelect } from './header-card.styles';

const locales = {
	USD: 'en-US',
	KZT: 'kz-KZ'
};

const USD = 63.54 / 30;
const KZT = USD * 491;

const HeaderCard = () => {
	const [currency, setCurrency] = useState('USD');
	const [max, setMax] = useState(0);
	const [interval, setInterval] = useState(30);

	const cur = new Intl.NumberFormat(locales[currency], {
		style: 'currency',
		currency,
		currencyDisplay: 'narrowSymbol',
		minimumFractionDigits: 0,
		maximumFractionDigits: max,
		roundingPriority: 'lessPrecision'
	}).format(currency === 'USD' ? USD * interval : KZT * interval);

	return (
		<>
			<Root>
				<Title>
					Spendings{' '}
					<LargeText $shade="light" onClick={() => setInterval(Math.floor(Math.random() * (365 - 7 + 1)) + 7)}>
						per {interval} days
					</LargeText>
					<StubSelect
						onClick={() => {
							setCurrency(currency === 'USD' ? 'KZT' : 'USD');
						}}
					>
						{currency === 'USD' ? 'KZT' : 'USD'}
					</StubSelect>
				</Title>

				<Costs>
					<Digits onClick={() => setMax(max === 2 ? 0 : 2)}>{cur}</Digits>
				</Costs>

				<svg width="100%" height="20" style={{ borderRadius: '10px' }}>
					<rect x="0%" y="0" width="30%" height="20" fill="#ff9999" />
					<rect x="30%" y="0" width="25%" height="20" fill="#66b3ff" />
					<rect x="55%" y="0" width="15%" height="20" fill="#99ff99" />
					<rect x="70%" y="0" width="10%" height="20" fill="#ffcc99" />
					<rect x="80%" y="0" width="20%" height="20" fill="#c2c2f0" />
				</svg>
			</Root>

			<Navigation>
				<Profile as={Link} to="/profile">
					<Icon name="profile" />
				</Profile>

				<Library as={Link} to="/library">
					<Icon name="library" />
				</Library>
			</Navigation>
		</>
	);
};

export default HeaderCard;
