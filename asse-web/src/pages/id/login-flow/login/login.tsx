import React from 'react';

import { Button, TextField } from '@ui';
import useLogin from './use-login';

const LoginUnit = () => {
	const form = useLogin();

	return (
		<div style={{ margin: '60px' }}>
			<h1>Login</h1>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				noValidate
			>
				<form.Field name="email">
					{(field) => (
						<>
							<TextField
								label="E-Mail"
								id={field.name}
								name={field.name}
								value={field.state.value}
								type="email"
								onChange={(e) => {
									field.handleChange(e.target.value);
								}}
								isFullWidth
							/>
							<br />
							{field.state.meta.errors ? <em role="alert">{field.state.meta.errors.join(', ')}</em> : null}
						</>
					)}
				</form.Field>

				<hr />
				<form.Field name="password">
					{(field) => (
						<>
							<TextField
								label="Password"
								id={field.name}
								name={field.name}
								value={field.state.value}
								type="password"
								onChange={(e) => {
									field.handleChange(e.target.value);
								}}
								isFullWidth
							/>
							<br />
							{field.state.meta.errors ? <em role="alert">{field.state.meta.errors.join(', ')}</em> : null}
						</>
					)}
				</form.Field>

				<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
					{([canSubmit, isSubmitting]) => (
						<Button type="submit" disabled={!canSubmit} size="medium" isFullWidth>
							{isSubmitting ? '...' : 'Submit'}
						</Button>
					)}
				</form.Subscribe>
			</form>
		</div>
	);
};

export default LoginUnit;
