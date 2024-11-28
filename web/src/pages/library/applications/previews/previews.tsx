import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@store';

import { actions as appsActs } from '@data/applications';
import { selectors as appsSelectors } from '@data/applications';
import { useObtainPreviewApplicationsQuery } from '@data/applications/api';

import ShowMore from '@pages/library/show-more';
import PreviewItem from './preview-item';
import Root from './previews.styles';

const CategoryPreview = () => {
	const dispatch = useAppDispatch();
	const result = useObtainPreviewApplicationsQuery();
	const previewsList = useSelector(appsSelectors.previewSelector);

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(appsActs.addAppPreviews(result.data));
	}, [result.isSuccess, result.isFetching]);

	if (!previewsList.length && !result.isFetching) return null;

	if (result.isFetching) {
		return <Root>Loading</Root>;
	}

	return (
		<Root>
			{previewsList.map((preview) => (
				<PreviewItem key={preview.id} {...preview} />
			))}

			{previewsList.length >= 6 && <ShowMore to="/library/categories" />}
		</Root>
	);
};

export default CategoryPreview;
