import React from 'react';
import { useSelector } from 'react-redux';

import { Icon } from '@ui';
import { AppPreviews } from '@pages/library/applications';
import { PaymentPreviews } from '@pages/library/payments';
import { CategoryPreviews } from '@pages/library/categories';

import { previewSelector as appPreviewsSelector } from '@data/applications/selectors';
import { previewSelector as paymentPreviewsSelector } from '@data/payments/selectors';
import { previewSelector as categoryPreviewsSelector } from '@data/categories/selectors';

import { useShallFill } from '@hooks';

import Search from './search';
import { Link, Outlet, useChildMatches } from '@tanstack/react-router';
import Root, { FeaturedApps, Title, Section } from './library.styles';

const LibraryPage = () => {
	const children = useChildMatches();
	const [rootRef, shallFill] = useShallFill([children]);

	const appPreviews = useSelector(appPreviewsSelector);
	const paymentPreviews = useSelector(paymentPreviewsSelector);
	const categoryPreviews = useSelector(categoryPreviewsSelector);

	return (
		<Root ref={rootRef} $shouldFill={shallFill}>
			<FeaturedApps>
				<Search />
			</FeaturedApps>

			{!children.length && (
				<>
					{categoryPreviews.length > 0 && (
						<Section>
							<Title as={Link} to="/library/categories">
								Categories <Icon name="arrow-right" width={18} height={18} />
							</Title>

							<CategoryPreviews />
						</Section>
					)}

					{appPreviews.length > 0 && (
						<Section>
							<Title as={Link} to="/library/applications">
								Applications <Icon name="arrow-right" width={18} height={18} />
							</Title>

							<AppPreviews />
						</Section>
					)}

					{paymentPreviews.length > 0 && (
						<Section>
							<Title as={Link} to="/library/payments">
								Payment Methods <Icon name="arrow-right" width={18} height={18} />
							</Title>

							<PaymentPreviews />
						</Section>
					)}
				</>
			)}

			{!children.length && !categoryPreviews.length && !appPreviews.length && !paymentPreviews.length && (
				<Section>
					<Title>No data</Title>
				</Section>
			)}

			<Outlet />
		</Root>
	);
};

export default LibraryPage;
