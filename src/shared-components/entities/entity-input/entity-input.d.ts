import React from 'react';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	isTextDark: boolean;
	align?: 'left' | 'center' | 'right';
};
