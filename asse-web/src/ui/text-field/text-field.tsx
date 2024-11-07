import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Root, { InputRoot, Input, Label, ErrorsList, ErrorMessage } from './text-field.styles';

import type { Props } from './text-field.d';

const TextField = React.forwardRef<HTMLInputElement, Props>(
	({ isRounded, placeholder, label, onChange, errors = [], fill = 'none', isFullWidth, ...restProps }, ref) => {
		const [id] = useState(uuid());
		const withErrors = errors.length > 0;

		return (
			<Root $isFullWidth={isFullWidth}>
				<InputRoot $withErrors={withErrors}>
					{/* " " is Safari hack */}
					<Input
						ref={ref}
						onInput={onChange}
						{...restProps}
						placeholder=" "
						id={id}
						aria-invalid={withErrors}
						aria-errormessage={errors.join(';')}
					/>

					<Label htmlFor={id}>{label || placeholder}</Label>
				</InputRoot>

				{withErrors && (
					<ErrorsList>
						{errors.map((error: string) => (
							<ErrorMessage key={error} aria-live="polite">
								{error}
							</ErrorMessage>
						))}
					</ErrorsList>
				)}
			</Root>
		);
	}
);

export default TextField;
