import React from 'react';

import { useGetAllCategoriesQuery } from '@data/categories/api';

const LibraryCategoriesList = () => {
	const result = useGetAllCategoriesQuery();

	console.log(result);

	return (
		<div>
			<h1>Library Categories List</h1>
		</div>
	);
};

export default LibraryCategoriesList;
