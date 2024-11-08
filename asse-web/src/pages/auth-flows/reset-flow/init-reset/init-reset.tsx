import React from 'react';

import { formatError } from '@utils';
import { useResetPassword } from './_hooks';

import { H1, Button, TextField } from '@ui';
import { PageRoot, PageForm, Actions } from './init-reset.styles';

const InitializePasswordReset = () => {
	const form = useResetPassword();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		form.handleSubmit();
	};

	return (
		<PageRoot>
			<H1>Password Reset</H1>

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
							<Button type="submit" isDisabled={!canSubmit || isSubmitting} size="medium" isFullWidth>
								Send E-Mail
							</Button>
						)}
					</form.Subscribe>

					<Button to="/login" size="medium" isFullWidth isSecondary>
						Sign In
					</Button>
				</Actions>
			</PageForm>
		</PageRoot>
	);
};

export default InitializePasswordReset;
