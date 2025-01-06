import React from 'react';

import Root from './entity-input.styles';
import { TextField as AriaTextField } from 'react-aria-components';

import type { Props } from './entity-input.d';

const EntityInput = ({ isTextDark, align = 'left', value, onInput, ...restProps }: Props) => {
	return (
		<AriaTextField value={String(value || '')} onInput={onInput}>
			<Root $isTextDark={isTextDark} $align={align} {...restProps} />
		</AriaTextField>
	);
};

export default EntityInput;
