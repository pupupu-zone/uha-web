import React from 'react';

import { LargeText } from '@ui';
import { Link } from '@tanstack/react-router';
import Root, { Title, Costs, Digits, Navigation, Profile, Library, Left, Right } from './header-card.styles';

const HeaderCard = () => {
	return (
		<Root>
			<Left>
				<Title>Dashboard</Title>

				<Costs>
					<Digits>$ 274</Digits>

					<LargeText $shade="light">per month</LargeText>
				</Costs>
			</Left>

			<Right>
				<Navigation>
					<Profile as={Link} to="/profile">
						P
					</Profile>
					<Library as={Link} to="/library">
						L
					</Library>
				</Navigation>
			</Right>
		</Root>
	);
};

export default HeaderCard;
