import React, { useEffect, useRef } from 'react';

import { formatError } from '@utils';
import { useRegister } from './_hooks';
import { useLazyResendEmailQuery } from '@pages/auth-flows/register-flow';

import { Button, TextField } from '@ui';
import AuthFlow from '@pages/auth-flows';
import { PageForm, Actions } from './register.styles';

const RegisterPage = () => {
	const form = useRegister();
	const firstInput = useRef<HTMLInputElement>(null);
	const [resendEmail, resendResults] = useLazyResendEmailQuery();

	useEffect(() => {
		if (!firstInput.current) return;

		firstInput.current.focus();
	}, [firstInput.current]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		form.handleSubmit();
	};

	const onResendEmail = () => {
		const email = form.getFieldValue('email');

		resendEmail({ email });
	};

	return (
		<AuthFlow>
			<PageForm onSubmit={onSubmit} noValidate>
				<form.Field name="name">
					{(field) => {
						const onChangeHd = (e: React.ChangeEvent<HTMLInputElement>) => {
							field.handleChange(e.target.value);
						};

						return (
							<TextField
								ref={firstInput}
								id={field.name}
								type="text"
								label="Your name"
								name={field.name}
								autoComplete="name"
								onChange={onChangeHd}
								value={field.state.value}
								errors={field.state.meta.isDirty ? formatError(field.state.meta.errors) : undefined}
							/>
						);
					}}
				</form.Field>

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
								autoComplete="password"
								onChange={onChangeHd}
								value={field.state.value}
								errors={field.state.meta.isDirty ? formatError(field.state.meta.errors) : undefined}
							/>
						);
					}}
				</form.Field>

				<Actions>
					<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
						{([canSubmit, isSubmitting]) => (
							<Button type="submit" isDisabled={!canSubmit || isSubmitting} size="medium" isFullWidth>
								Sign Up
							</Button>
						)}
					</form.Subscribe>

					<form.Subscribe
						selector={({ fieldMeta }) => {
							const field = fieldMeta.email ?? {};
							const errors = fieldMeta.email?.errors ?? [];

							return field.isPristine || errors.length > 0;
						}}
					>
						{(withEmailErrors) => (
							<Button
								size="medium"
								onPress={onResendEmail}
								isDisabled={withEmailErrors || resendResults.isFetching}
								isFullWidth
								isSecondary
							>
								Resend E-Mail
							</Button>
						)}
					</form.Subscribe>
				</Actions>
			</PageForm>
		</AuthFlow>
	);
};

export default RegisterPage;
