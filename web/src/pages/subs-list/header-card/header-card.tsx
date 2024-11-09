import React from 'react';

import { SamplePie } from '@images';
import { LargeText, Icon } from '@ui';
import { Link } from '@tanstack/react-router';
import Root, { Test, Title, Costs, Digits, Navigation, Profile, Library, Left, Right } from './header-card.styles';

const HeaderCard = () => {
	return (
		<>
			<Root>
				<Test />
				<Left>
					<Title>Dashboard</Title>

					<Costs>
						<Digits>$&thinsp;274</Digits>

						<LargeText $shade="light">per month</LargeText>
					</Costs>
				</Left>

				<Right>
					<SamplePie />
				</Right>
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
