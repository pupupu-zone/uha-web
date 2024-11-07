import React from 'react';

import useLogin from './use-login';
import { formatError } from '@utils';

import { H1, Button, TextField } from '@ui';
import { PageRoot, PageForm, Actions } from './login.styles';

const LoginPage = () => {
	const form = useLogin();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		form.handleSubmit();
	};

	return (
		<PageRoot>
			<H1>Login</H1>

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
								autoComplete="email"
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
							<Button type="submit" isDisabled={!canSubmit || isSubmitting} size="medium" isFullWidth>
								Sign In
							</Button>
						)}
					</form.Subscribe>

					<Button to="/register" size="medium" isFullWidth isSecondary>
						Sign Up
					</Button>

					<Button to="/reset-password" size="medium" isFullWidth isSecondary>
						Restore Password
					</Button>
				</Actions>
			</PageForm>
		</PageRoot>
	);
};

export default LoginPage;
