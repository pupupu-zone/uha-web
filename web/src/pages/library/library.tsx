import React from 'react';

import { Icon } from '@ui';
import { Link, Outlet, useChildMatches } from '@tanstack/react-router';
import Root, { FeaturedApps, App, Title, Section } from './library.styles';

const LibraryPage = () => {
	const children = useChildMatches();

	return (
		<Root>
			{/* <FeaturedApps>
				<App as="a" target="_blank" rel="noopener noreferrer" href="https://aeza.net/?ref=491190">
					<img src="https://my.aeza.net/assets/logo-6c69f4c1.svg" alt="Aeza" />
				</App>
			</FeaturedApps> */}

			{!children.length && (
				<>
					<Section>
						<Title as={Link} to="/library/categories">
							Categories <Icon name="arrow-right" />
						</Title>
					</Section>

					<Section>
						<Title as={Link} to="/library/applications">
							Applications <Icon name="arrow-right" />
						</Title>
					</Section>

					<Section>
						<Title as={Link} to="/library/payments">
							Payment Methods <Icon name="arrow-right" />
						</Title>
					</Section>
				</>
			)}

			<Outlet />
		</Root>
	);
};

export default LibraryPage;
