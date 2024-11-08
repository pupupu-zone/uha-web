import React from 'react';

import { H3 } from '../typography';
import Root from './toaster.styles';

import type { Props } from './toaster.d';

const Toaster = ({ type, message, ariaProps }: Props) => (
	<Root $type={type} {...ariaProps}>
		<H3>{message}</H3>
	</Root>
);

export default Toaster;
