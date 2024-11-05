import React from 'react';

import useNewToken from './hook';

const NewTokenUnit = () => {
	const form = useNewToken();

	return (
		<div>
			<h1>Token Regenerator</h1>

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

export default NewTokenUnit;
