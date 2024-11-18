import React from 'react';

import { H1, Icon } from '@ui';
import Root from './library.styles';

const LibraryPage = () => {
	return (
		<Root>
			<H1>
				Categories <Icon name="arrow-right" />
			</H1>

			<H1>
				Applications <Icon name="arrow-right" />
			</H1>
		</Root>
	);
};

export default LibraryPage;
