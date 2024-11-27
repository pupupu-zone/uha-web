import React from 'react';

import { useGetAllCategoriesQuery } from '@data/categories/api';

import ListItem from './list-item';
import Root from './list.styles';

const LibraryCategoriesList = () => {
	const result = useGetAllCategoriesQuery();

	return <Root>{result.data?.map((category) => <ListItem key={category.id} {...category} />)}</Root>;
};

export default LibraryCategoriesList;
