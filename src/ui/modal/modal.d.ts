import React from 'react';

export type Props = React.PropsWithChildren<{
	isOpen: boolean;
	openModal: () => void;
	closeModal: () => void;
}>;
