import { type AriaButtonProps } from 'react-aria-components';
import type { FileRoutesByTo } from '@src/routeTree.gen';

export type InternalProps = {
	color?: 'primary';
	size?: 'medium';
	to?: FileRoutesByTo;
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
