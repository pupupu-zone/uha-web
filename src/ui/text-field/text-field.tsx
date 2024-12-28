import React, { useId, useState } from 'react';

import Root, { Label, Input, ErrorsList, ErrorMessage } from './text-field.styles';

import type { Props } from './text-field.d';

const TextField = ({ isRounded, label, onChange, errors = [], fill = 'none', isFullWidth, ...restProps }: Props) => {
	const id = useId();
	const [isTouched, setIsTouched] = useState(false); // I want to show no errors during the first interaction
	const [isFocused, setIsFocused] = useState(false);
	const showErrors = errors.length > 0 && isTouched;
	const primaryError = errors[0]; // One error per time, do not overwhelm user

	const onFocusHd = (event: React.FocusEvent<HTMLInputElement>) => {
		setIsFocused(true);
		restProps.onFocus?.(event);
	};

	const onBlurHd = (event: React.FocusEvent<HTMLInputElement>) => {
		setIsFocused(false);
		setIsTouched(true);
		restProps.onBlur?.(event);
	};

	return (
		<Root $isFullWidth={isFullWidth} $showErrors={showErrors} $isFocused={isFocused}>
			<Label htmlFor={id} $showErrors={showErrors}>
				{label || 'Input'}
			</Label>

			<Input
				onInput={onChange}
				onFocus={onFocusHd}
				onBlur={onBlurHd}
				{...restProps}
				id={id}
				aria-invalid={showErrors}
				aria-errormessage={primaryError}
			/>

			{showErrors && (
				<ErrorsList>
					<ErrorMessage role="alert" aria-live="polite">
						{primaryError}
					</ErrorMessage>
				</ErrorsList>
			)}
		</Root>
	);
};

export default TextField;
