import React from 'react';
import { useSelector } from 'react-redux';

import { allAppsSelector } from '@data/applications/selectors';

import { Icon } from '@ui';
import ListItem from './list-item';
import { Link } from '@tanstack/react-router';
import { Title, Section } from '../library.styles';
import { AppsList } from './applications.styles';

const Applications = () => {
	const apps = useSelector(allAppsSelector);

	return (
		<Section>
			<Title as={Link} to="/library">
				<Icon name="arrow-left" /> Library
			</Title>

			<AppsList>
				{apps.map((category) => (
					<ListItem key={category.id} {...category} />
				))}
			</AppsList>
		</Section>
	);
};

export default Applications;
