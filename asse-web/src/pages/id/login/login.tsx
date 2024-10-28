import React from 'react';

import useLogin from './use-login';

const LoginUnit = () => {
	const form = useLogin();

	return (
		<div>
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
							<label htmlFor={field.name}>E-Mail</label> <br />
							<input
								id={field.name}
								name={field.name}
								value={field.state.value}
								type="email"
								onChange={(e) => {
									field.handleChange(e.target.value);
								}}
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
							<label htmlFor={field.name}>Password</label> <br />
							<input
								id={field.name}
								name={field.name}
								value={field.state.value}
								type="password"
								onChange={(e) => {
									field.handleChange(e.target.value);
								}}
							/>
							<br />
							{field.state.meta.errors ? <em role="alert">{field.state.meta.errors.join(', ')}</em> : null}
						</>
					)}
				</form.Field>

				<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
					{([canSubmit, isSubmitting]) => (
						<button type="submit" disabled={!canSubmit}>
							{isSubmitting ? '...' : 'Submit'}
						</button>
					)}
				</form.Subscribe>
			</form>
		</div>
	);
};

export default LoginUnit;
