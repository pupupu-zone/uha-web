import React from 'react';
import { useSelector } from 'react-redux';

import { previewSelector } from '@data/applications/selectors';

import { HorizontalScroll } from '@ui';
import PreviewItem from './preview-item';
import ShowMore from '@pages/library/show-more';

const CategoryPreview = () => {
	const apps = useSelector(previewSelector);

	return (
		<HorizontalScroll>
			{apps.map((preview) => (
				<PreviewItem key={preview.id} {...preview} />
			))}

			{apps.length >= 6 && <ShowMore to="/library/applications" />}
		</HorizontalScroll>
	);
};

export default CategoryPreview;
