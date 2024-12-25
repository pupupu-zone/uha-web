import React from 'react';
import { useSelector } from 'react-redux';

import { previewSelector } from '@data/applications/selectors';

import ShowMore from '@pages/library/show-more';
import PreviewItem from './preview-item';
import Root from './previews.styles';

const CategoryPreview = () => {
	const apps = useSelector(previewSelector);

	return (
		<Root>
			{apps.map((preview) => (
				<PreviewItem key={preview.id} {...preview} />
			))}

			{apps.length >= 6 && <ShowMore to="/library/applications" />}
		</Root>
	);
};

export default CategoryPreview;
