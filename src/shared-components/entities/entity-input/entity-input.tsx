import React from 'react';

import Root from './entity-input.styles';
import type { Props } from './entity-input.d';

const EntityInput = ({ isTextDark, align = 'left', ...restProps }: Props) => {
	return <Root $isTextDark={isTextDark} $align={align} {...restProps} />;
};

export default EntityInput;
