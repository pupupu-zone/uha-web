import React from 'react';

import { Icon } from '@ui';
import { Link } from '@tanstack/react-router';
import { Title, Section } from '../library.styles';

const Categories = () => {
	return (
		<Section>
			<Title as={Link} to="/library">
				<Icon name="arrow-left" /> Library
			</Title>
			+++
		</Section>
	);
};

export default Categories;
