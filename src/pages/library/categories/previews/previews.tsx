import React from 'react';
import { useSelector } from 'react-redux';

import { previewSelector } from '@data/categories/selectors';

import ShowMore from '@pages/library/show-more';
import PreviewItem from './preview-item';
import Root from './previews.styles';

const CategoryPreview = () => {
	const categories = useSelector(previewSelector);

	return (
		<Root>
			{categories.map((preview) => (
				<PreviewItem key={preview.id} {...preview} />
			))}

			{categories.length >= 6 && <ShowMore to="/library/categories" />}
		</Root>
	);
};

export default CategoryPreview;
