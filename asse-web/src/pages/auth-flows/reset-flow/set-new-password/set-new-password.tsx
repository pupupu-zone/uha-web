import React, { useEffect } from 'react';

import { formatError } from '@utils';
import { SuccessStateImg } from '@images';
import { useSetNewPassword } from './_hooks';

import { TextField, Button } from '@ui';
import { PageForm, Actions } from './set-new-password.styles';

import type { Props } from './set-new-password.d';

const SetNewPassword = ({ token }: Props) => {
	const { form, result } = useSetNewPassword();

	useEffect(() => {
		if (!token) return;

		form.setFieldValue('token', token);
	}, [token]);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		form.handleSubmit();
	};

	if (result.isSuccess) {
		return (
			<>
				<SuccessStateImg width={150} height={150} />

				<Button to="/login" size="medium" isFullWidth isSecondary>
					Sign In
				</Button>
			</>
		);
	}

	return (
		<PageForm onSubmit={onSubmit} noValidate>
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
							Set Up
						</Button>
					)}
				</form.Subscribe>
			</Actions>
		</PageForm>
	);
};

export default SetNewPassword;
