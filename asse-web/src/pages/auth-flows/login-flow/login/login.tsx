import React, { useEffect, useRef } from 'react';

import { useLogin } from './_hooks';
import { formatError } from '@utils';

import AuthFlow from '@pages/auth-flows';
import { Button, TextField } from '@ui';
import { PageForm, Actions } from './login.styles';

const LoginPage = () => {
	const form = useLogin();
	const firstInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (!firstInput.current) return;

		firstInput.current.focus();
	}, [firstInput.current]);

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
								ref={firstInput}
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
				</Actions>
			</PageForm>
		</AuthFlow>
	);
};

export default LoginPage;
