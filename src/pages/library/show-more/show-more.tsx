import React from 'react';

import { Icon } from '@ui';
import { Link } from '@tanstack/react-router';
import Root, { Circle } from './show-more.styles';

const ShowMore = ({ to }) => {
	return (
		<Root>
			<Circle as={Link} to={to}>
				<Icon name="arrow-right" width={28} height={28} />
			</Circle>
		</Root>
	);
};

export default ShowMore;
