import React from 'react';

import Root from './toaster.styles';
import type { Props } from './toaster.d';

const Toaster = ({ type, message }: Props) => {
	return <Root $type={type}>{message}</Root>;
};

export default Toaster;
