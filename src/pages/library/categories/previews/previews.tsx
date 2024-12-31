import React from 'react';
import { useSelector } from 'react-redux';

import { previewSelector } from '@data/categories/selectors';

import { HorizontalScroll } from '@ui';
import PreviewItem from './preview-item';
import ShowMore from '@pages/library/show-more';

const CategoryPreview = () => {
	const categories = useSelector(previewSelector);

	return (
		<HorizontalScroll>
			{categories.map((preview) => (
				<PreviewItem key={preview.id} {...preview} />
			))}

			{categories.length >= 6 && <ShowMore to="/library/categories" />}
		</HorizontalScroll>
	);
};

export default CategoryPreview;
