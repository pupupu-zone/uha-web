import React from 'react';

import { formatError } from '@utils';
import { useResetPassword } from './_hooks';

import { Button, TextField } from '@ui';
import AuthFlow from '@pages/auth-flows';
import { PageForm, Actions } from './init-reset.styles';

const InitializePasswordReset = () => {
	const { form, result } = useResetPassword();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		form.handleSubmit();
	};

	return (
		<AuthFlow>
			<PageForm onSubmit={onSubmit} noValidate>
				<form.Field name="email">
					{(field) => {
						const onChangeHd = (e: React.ChangeEvent<HTMLInputElement>) => {
							field.handleChange(e.target.value);
						};

						return (
							<TextField
								id={field.name}
								type="email"
								label="E-Mail"
								name={field.name}
								onChange={onChangeHd}
								value={field.state.value}
								isFullWidth
								errors={field.state.meta.isDirty ? formatError(field.state.meta.errors) : undefined}
							/>
						);
					}}
				</form.Field>

				<Actions>
					<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
						{([canSubmit, isSubmitting]) => (
							<Button
								type="submit"
								isDisabled={!canSubmit || isSubmitting || result.isFetching}
								size="medium"
								isFullWidth
							>
								Send E-Mail
							</Button>
						)}
					</form.Subscribe>
				</Actions>
			</PageForm>
		</AuthFlow>
	);
};

export default InitializePasswordReset;
