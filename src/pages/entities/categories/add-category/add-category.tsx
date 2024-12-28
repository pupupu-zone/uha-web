import React from 'react';

import { useAddCategory } from './_hooks';
import CategorySharedView from '@pages/entities/categories/shared-view';

const AddCategory = () => {
	const { form } = useAddCategory();

	return <CategorySharedView form={form} />;
};

export default AddCategory;
