import React from 'react';
import { createPortal } from 'react-dom';

import Root, { Content, Backdrop } from './modal.styles';

import type { Props } from './modal.d';

const Portal = ({ children }: React.PropsWithChildren<unknown>) => {
	return createPortal(children, document.getElementById('modal')!);
};

const Modal = ({ children, closeModal, isOpen }: Props) => {
	if (!isOpen) return null;

	return (
		<Portal>
			<Root>
				<Backdrop onClick={closeModal} />

				<Content>{children}</Content>
			</Root>
		</Portal>
	);
};

export default Modal;
