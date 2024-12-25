import React from 'react';
import toast from 'react-hot-toast';

import { H3 } from '../typography';
import Root from './toaster.styles';

import type { Props } from './toaster.d';

const Toaster = ({ type, message, ariaProps, id }: Props) => {
	return (
		<Root $type={type} {...ariaProps} onClick={() => toast.remove(id)}>
			<H3>{message}</H3>
		</Root>
	);
};

export default Toaster;
