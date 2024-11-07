import { type AriaButtonProps } from 'react-aria-components';

export type InternalProps = {
	color?: 'blue';
	size?: 'medium';
	to?: string;
	isFullWidth?: boolean;
	isSecondary?: boolean;
};

export type StyleProps = {
	$color: InternalProps['color'];
	$size: InternalProps['size'];
	$isFullWidth: InternalProps['isFullWidth'];
	$isSecondary: InternalProps['isSecondary'];
};

export type Props = InternalProps & AriaButtonProps;
