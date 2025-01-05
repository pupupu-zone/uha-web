import React from 'react';

import Root from './entity-root.styles';
import type { Props } from './entity-root.d';

const EntityCaption = ({ children }: Props) => {
	return <Root>{children}</Root>;
};

export default EntityCaption;
