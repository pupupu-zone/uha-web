import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '@store';
import { useSelector } from 'react-redux';

import ShowMore from './show-more';
import { Icon } from '@ui';
import { CategoryPreviews } from '@pages/library/categories';
import { AppPreviews } from '@pages/library/applications';
import { PaymentsPreview } from '@pages/library/payments';

import Search from './search';

import { actions as paymentsActs } from '@data/payments';
import { selectors as paymentsSelectors } from '@data/payments';
import { useGetPreviewPaymentsQuery } from '@data/payments/api';

import { Link, Outlet, useChildMatches } from '@tanstack/react-router';
import Root, { FeaturedApps, Title, Section, Previews } from './library.styles';

const LibraryPage = () => {
	const dispatch = useAppDispatch();
	const children = useChildMatches();
	// Move to related previews
	const paymentsResult = useGetPreviewPaymentsQuery();
	const paymentPreviews = useSelector(paymentsSelectors.previewSelector);
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
		if (!paymentsResult.isSuccess || paymentsResult.isFetching) return;

		dispatch(paymentsActs.addPaymentPreviews(paymentsResult.data));
	}, [paymentsResult.isSuccess, paymentsResult.isFetching]);

	return (
		<Root ref={rootRef} $shouldFill={shouldFill}>
			<FeaturedApps>
				<Search />
			</FeaturedApps>

			{!children.length && (
				<>
					<Section>
						<Title as={Link} to="/library/categories">
							Categories <Icon name="arrow-right" width={18} height={18} />
						</Title>

						<CategoryPreviews />
					</Section>

					<Section>
						<Title as={Link} to="/library/applications">
							Applications <Icon name="arrow-right" width={18} height={18} />
						</Title>

						<AppPreviews />

						{/* {appPreviews.length > 0 && (
							<Previews>
								{appPreviews.map((app) => (
									<AppPreview key={`app-${app.id}`} {...app} />
								))}

								{appPreviews.length >= 6 && <ShowMore to="/library/applications" />}
							</Previews>
						)} */}
					</Section>

					<Section>
						<Title as={Link} to="/library/payments">
							Payment Methods <Icon name="arrow-right" width={18} height={18} />
						</Title>

						{paymentPreviews.length > 0 && (
							<Previews>
								{paymentPreviews.map((payment) => (
									<PaymentsPreview key={payment.id} {...payment} />
								))}

								{paymentPreviews.length >= 6 && <ShowMore to="/library/payments" />}
							</Previews>
						)}
					</Section>
				</>
			)}

			<Outlet />
		</Root>
	);
};

export default LibraryPage;
