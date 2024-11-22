import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';

import ShowMore from './show-more';
import { H1, Text, Icon } from '@ui';
import { CategoryPreview } from '@pages/library/categories';
import { AppPreview } from '@pages/library/applications';

import { actions as appsActs } from '@data/applications';
import { selectors as appsSelectors } from '@data/applications';
import { useObtainPreviewApplicationsQuery } from '@data/applications/api';

import { actions as categoriesActs } from '@data/categories';
import { selectors as categoriesSelectors } from '@data/categories';
import { useObtainPreviewCategoriesQuery } from '@data/categories/api';

import { Link, Outlet, useChildMatches } from '@tanstack/react-router';
import Root, { FeaturedApps, App, Title, Section, Image, Previews } from './library.styles';

const LibraryPage = () => {
	const dispatch = useAppDispatch();
	const children = useChildMatches();
	const result = useObtainPreviewCategoriesQuery();
	const appResult = useObtainPreviewApplicationsQuery();
	const categoryPreviews = useSelector(categoriesSelectors.previewSelector);
	const appPreviews = useSelector(appsSelectors.previewSelector);
	const [shouldFill, setShouldFill] = useState(false);
	const rootRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (rootRef.current) {
			const NAVBAR_HEIGHT = 120;
			const contentHeight = rootRef.current.offsetHeight;
			const viewportHeight = window.innerHeight + NAVBAR_HEIGHT;

			setShouldFill(contentHeight <= viewportHeight);
		}
	}, [children]);

	useEffect(() => {
		if (!result.isSuccess || result.isFetching) return;

		dispatch(categoriesActs.addCategoryPreviews(result.data));
	}, [result.isSuccess, result.isFetching]);

	useEffect(() => {
		if (!appResult.isSuccess || appResult.isFetching) return;

		dispatch(appsActs.addAppPreviews(appResult.data));
	}, [appResult.isSuccess, appResult.isFetching]);

	return (
		<Root ref={rootRef} $shouldFill={shouldFill}>
			<FeaturedApps>
				<App as="a" target="_blank" rel="noopener noreferrer" href="https://aeza.net/?ref=491190">
					<Image>
						<img
							src="https://immich.terra.onl/api/assets/e7436641-dac4-42c3-8b1d-5ea31265c02e/thumbnail?size=preview&key=eLKCSTxNXoH5aP5Qc4I4k8TpB9XzW3sBk6O6Dc9OBqQXEpVxmzmk9v_WcVGZLamDHlM&c=aJtK6OynTVCTkxwpXH47RBS%2FyAM%3D"
							alt="Wolt"
						/>
					</Image>

					<div>
						<H1 $weight={600}>AEZA</H1>
						<Text as="h3">Host your servers there</Text>
					</div>
				</App>
			</FeaturedApps>

			{!children.length && (
				<>
					<Section>
						<Title as={Link} to="/library/categories">
							Categories <Icon name="arrow-right" width={18} height={18} />
						</Title>

						{categoryPreviews.length > 0 && (
							<Previews>
								{categoryPreviews.map((category) => (
									<CategoryPreview key={`cat-${category.id}`} {...category} />
								))}

								{categoryPreviews.length >= 6 && <ShowMore to="/library/categories" />}
							</Previews>
						)}
					</Section>

					<Section>
						<Title as={Link} to="/library/applications">
							Applications <Icon name="arrow-right" width={18} height={18} />
						</Title>

						{appPreviews.length > 0 && (
							<Previews>
								{appPreviews.map((app) => (
									<AppPreview key={`app-${app.id}`} {...app} />
								))}

								{appPreviews.length >= 6 && <ShowMore to="/library/categories" />}
							</Previews>
						)}
					</Section>

					<Section>
						<Title as={Link} to="/library/payments">
							Payment Methods <Icon name="arrow-right" width={18} height={18} />
						</Title>
					</Section>
				</>
			)}

			<Outlet />
		</Root>
	);
};

export default LibraryPage;
