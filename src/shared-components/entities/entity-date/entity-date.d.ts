import React from 'react';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	isTextDark: boolean;
};

export type StyleProps = {
	$isTextDark: Props['isTextDark'];
};
