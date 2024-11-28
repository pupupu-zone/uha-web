import React from 'react';
import { useSelector } from 'react-redux';

import { allCategoriesSelector } from '@data/categories/selectors';

import { Icon } from '@ui';
import ListItem from './list-item';
import { Link } from '@tanstack/react-router';
import { Title, Section } from '../library.styles';
import { CategoriesList } from './categories.styles';

const Categories = () => {
	const categories = useSelector(allCategoriesSelector);

	return (
		<Section>
			<Title as={Link} to="/library">
				<Icon name="arrow-left" width={18} height={18} /> Library
			</Title>

			<CategoriesList>
				{categories.map((category) => (
					<ListItem key={category.id} {...category} />
				))}
			</CategoriesList>
		</Section>
	);
};

export default Categories;
