import { type AriaButtonProps } from 'react-aria-components';
import type { FileRoutesByTo } from '@src/routeTree.gen';

export type InternalProps = {
	tyvariantpe?: 'primary' | 'faded';
	size?: 'medium';
	to?: FileRoutesByTo;
	isFullWidth?: boolean;
	isSecondary?: boolean;
};

export type StyleProps = {
	$variant: InternalProps['variant'];
	$size: InternalProps['size'];
	$isFullWidth: InternalProps['isFullWidth'];
	$isSecondary: InternalProps['isSecondary'];
};

export type Props = InternalProps & AriaButtonProps;
