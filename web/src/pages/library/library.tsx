import React, { useEffect, useRef, useState } from 'react';

import { Icon } from '@ui';
import { CategoryPreviews } from '@pages/library/categories';
import { AppPreviews } from '@pages/library/applications';
import { PaymentPreviews } from '@pages/library/payments';

import useLoadData from './use-load-data';

import Search from './search';
import { Link, Outlet, useChildMatches } from '@tanstack/react-router';
import Root, { FeaturedApps, Title, Section } from './library.styles';

const LibraryPage = () => {
	useLoadData();

	const children = useChildMatches();
	const rootRef = useRef<HTMLDivElement>(null);

	const [shouldFill, setShouldFill] = useState(false);

	useEffect(() => {
		if (rootRef.current) {
			const NAVBAR_HEIGHT = 120;
			const contentHeight = rootRef.current.offsetHeight;
			const viewportHeight = window.innerHeight + NAVBAR_HEIGHT;

			setShouldFill(contentHeight <= viewportHeight);
		}
	}, [children]);

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
					</Section>

					<Section>
						<Title as={Link} to="/library/payments">
							Payment Methods <Icon name="arrow-right" width={18} height={18} />
						</Title>

						<PaymentPreviews />
					</Section>
				</>
			)}

			<Outlet />
		</Root>
	);
};

export default LibraryPage;
