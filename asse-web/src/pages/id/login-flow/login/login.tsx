import React from 'react';
// import { useLinkProps } from '@tanstack/react-router';

import useLogin from './use-login';
import { formatError } from '@utils';

import { H1, Button, TextField } from '@ui';
import Root, { LoginForm, Actions } from './login.styles';

const LoginUnit = () => {
	const form = useLogin();

	// console.log('props:', props);

	return (
		<Root>
			<H1>Login</H1>

			<LoginForm
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				noValidate
			>
				<form.Field name="email">
					{(field) => (
						<TextField
							label="E-Mail"
							id={field.name}
							name={field.name}
							value={field.state.value}
							type="email"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								field.handleChange(e.target.value);
							}}
							isFullWidth
							autoComplete="email"
							errors={formatError(field.state.meta.errors)}
						/>
					)}
				</form.Field>

				<form.Field name="password">
					{(field) => (
						<TextField
							label="Password"
							id={field.name}
							name={field.name}
							value={field.state.value}
							type="password"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								field.handleChange(e.target.value);
							}}
							isFullWidth
							autoComplete="current-password"
							errors={formatError(field.state.meta.errors)}
						/>
					)}
				</form.Field>

				<Actions>
					<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
						{([canSubmit, isSubmitting]) => (
							<Button type="submit" isDisabled={!canSubmit || isSubmitting} size="medium" isFullWidth>
								Submit
							</Button>
						)}
					</form.Subscribe>

					<Button to="/register" size="medium" isFullWidth isSecondary>
						Register
					</Button>
				</Actions>
			</LoginForm>
		</Root>
	);
};

export default LoginUnit;
