import React from 'react';

import { H1, Text, Icon } from '@ui';
import { Category } from '@pages/library/previews';

import { Link, Outlet, useChildMatches } from '@tanstack/react-router';
import Root, { FeaturedApps, App, Title, Section, Image, Previews } from './library.styles';

const LibraryPage = () => {
	const children = useChildMatches();

	return (
		<Root>
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
						<Text as="h3">Host your servers here</Text>
					</div>
				</App>
			</FeaturedApps>

			{!children.length && (
				<>
					<Section>
						<Title as={Link} to="/library/categories">
							Categories <Icon name="arrow-right" />
						</Title>

						<Previews>
							<Category title="Utilities" color="#f6e58d" />
							<Category title="VPN" color="#ffbe76" />
							<Category title="Entertainment" color="#ff7979" />
							<Category title="Messengers" color="#badc58" />
						</Previews>
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
