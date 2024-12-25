import React from 'react';

import Root from './textarea.styles';

import type { Props } from './textarea.d';
import calcLines from './calcLines';

const Textarea = React.forwardRef(({ innerRef, onChange, maxRows = 5, ...restProps }: Props, ref) => {
	const onChangeHd = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		calcLines(e, maxRows);

		if (typeof onChange === 'function') onChange(e);
	};

	return <Root ref={ref} {...restProps} onChange={onChangeHd} />;
});

export default Textarea;
