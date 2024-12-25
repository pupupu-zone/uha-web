import React from 'react';

import { useLogin } from './_hooks';
import { formatError } from '@utils';

import { Button, TextField } from '@ui';
import { PageForm, Actions } from './login.styles';

const LoginPage = () => {
	const { form, result } = useLogin();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		form.handleSubmit();
	};

	return (
		<PageForm onSubmit={onSubmit} noValidate>
			<form.Field name="login">
				{(field) => {
					const onChangeHd = (e: React.ChangeEvent<HTMLInputElement>) => {
						field.handleChange(e.target.value);
					};

					return (
						<TextField
							id={field.name}
							type="text"
							label="Login"
							name={field.name}
							autoComplete="login"
							onChange={onChangeHd}
							value={field.state.value}
							isFullWidth
							errors={field.state.meta.isDirty ? formatError(field.state.meta.errors) : undefined}
						/>
					);
				}}
			</form.Field>

			<form.Field name="password">
				{(field) => {
					const onChangeHd = (e: React.ChangeEvent<HTMLInputElement>) => {
						field.handleChange(e.target.value);
					};

					return (
						<TextField
							id={field.name}
							type="password"
							label="Password"
							name={field.name}
							autoComplete="current-password"
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
							Sign In
						</Button>
					)}
				</form.Subscribe>
			</Actions>
		</PageForm>
	);
};

export default LoginPage;
