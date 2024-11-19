import React from 'react';

import { Icon } from '@ui';
import { Link } from '@tanstack/react-router';
import { Title, Section } from '../library.styles';

const aApplications = () => {
	return (
		<Section>
			<Title as={Link} to="/library">
				<Icon name="arrow-left" /> Library
			</Title>
			applications
		</Section>
	);
};

export default aApplications;
