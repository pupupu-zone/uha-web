import React from 'react';

import type { Props } from './toaster.d';

import Root, { Title, Body, Icon, Content } from './toaster.styles';

const headers = {
	error: 'Error',
	success: 'Success',
	info: 'Information',
	blank: ''
};

const Toaster = ({ type, message, ariaProps, ...restProps }: Props) => {
	const title = headers[type] || '';

	console.log(restProps);

	return (
		<Root $type={type} {...ariaProps}>
			<Icon>ℹ</Icon>

			<Title>{message}</Title>
		</Root>
	);
};

export default Toaster;
