import React from 'react';

import useHook from './hook';

const SetNewPassword = ({ token }) => {
	const form = useHook(token);

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

export default SetNewPassword;
