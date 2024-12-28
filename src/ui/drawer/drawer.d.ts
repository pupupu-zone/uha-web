import React from 'react';
import type { SpringValue } from '@react-spring/web';

export type Props = React.PropsWithChildren<{
	isOpen: boolean;
	openDrawer: () => void;
	closeDrawer: () => void;
	y: SpringValue<number>;
	backdropSpring: {
		opacity: SpringValue<number>;
	};
}>;
