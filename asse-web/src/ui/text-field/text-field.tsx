import React, { useState } from 'react';
import type { Props } from './text-field.d';
import { v4 as uuid } from 'uuid';

import Root, { InputRoot, Input, Label, ErrorMessage } from './text-field.styles';

const TextField = React.forwardRef<HTMLInputElement, Props>(
	({ isRounded, placeholder, label, onChange, error, fill = 'none', isFullWidth, ...restProps }, ref) => {
		const [id] = useState(uuid());
		const withErrors = Boolean(error);

		return (
			<Root $isFullWidth={isFullWidth}>
				<InputRoot $withErrors={withErrors}>
					{/* " " is Safari hack */}
					<Input ref={ref} onInput={onChange} {...restProps} placeholder=" " id={id} />

					<Label htmlFor={id}>{label || placeholder}</Label>
				</InputRoot>

				{withErrors && <ErrorMessage>{error.message}</ErrorMessage>}
			</Root>
		);
	}
);

export default TextField;
