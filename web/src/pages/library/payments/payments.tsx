import React from 'react';
import { useSelector } from 'react-redux';

import { filteredSelector } from '@data/payments/selectors';

import { Icon } from '@ui';
import ListItem from './list-item';
import { Link } from '@tanstack/react-router';
import { Title, Section } from '../library.styles';
import { PaymentsList } from './payments.styles';

const Payments = () => {
	const payments = useSelector(filteredSelector);

	return (
		<Section>
			<Title as={Link} to="/library">
				<Icon name="arrow-left" /> Library
			</Title>

			<PaymentsList>
				{payments.map((category) => (
					<ListItem key={category.id} {...category} />
				))}
			</PaymentsList>
		</Section>
	);
};

export default Payments;
