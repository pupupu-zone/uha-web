import React from 'react';
import { createPortal } from 'react-dom';

import { Animated, Backdrop, DragHandle } from './drawer.styles';

import type { Props } from './drawer.d';

const Portal = ({ children }: React.PropsWithChildren<unknown>) => {
	return createPortal(children, document.getElementById('drawers')!);
};

const Drawer = ({ children, y, backdropSpring, closeDrawer, isOpen }: Props) => {
	if (!isOpen) return null;

	return (
		<Portal>
			<Backdrop style={backdropSpring} onClick={closeDrawer} />

			<Animated style={{ y, touchAction: 'none' }}>
				<DragHandle />

				{children}
			</Animated>
		</Portal>
	);
};

export default Drawer;
