import type { AriaTextFieldProps } from 'react-aria-components';

export type InternalProps = {
	description?: string;
	errors?: string[];
	isFullWidth?: boolean;
};

export type StyleProps = {
	$withErrors?: boolean;
	$isFullWidth?: boolean;
};

export type Props = InternalProps & AriaTextFieldProps;
