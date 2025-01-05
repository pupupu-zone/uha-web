import React from 'react';

import Root from './entity-caption.styles';
import type { Props } from './entity-caption.d';

const EntityCaption = ({ isTextDark, title }: Props) => {
	return <Root $isTextDark={isTextDark}>{title}</Root>;
};

export default EntityCaption;
