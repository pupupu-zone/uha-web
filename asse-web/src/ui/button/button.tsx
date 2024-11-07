import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button as AdobeButton } from 'react-aria-components';

import Root from './button.styles';

import type { Props } from './button.d';

const noop = () => {};

const Button = React.forwardRef(
	(
		{
			children,
			to,
			isFullWidth = false,
			isSecondary = false,
			onPress = noop,
			color = 'blue',
			size = 'medium',
			...restProps
		}: Props,
		ref
	) => {
		const navigate = useNavigate();

		const onPressHd = (e: React.ChangeEvent<HTMLInputElement>) => {
			if (to) {
				navigate({ to });
			}

			onPress(e);
		};

		return (
			<Root
				as={AdobeButton}
				ref={ref}
				$color={color}
				$size={size}
				$isFullWidth={isFullWidth}
				$isSecondary={isSecondary}
				onPress={onPressHd}
				{...restProps}
			>
				{children}
			</Root>
		);
	}
);

export default Button;
