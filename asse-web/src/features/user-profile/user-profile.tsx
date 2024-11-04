import React from 'react';

import useUpdateUser from './use-update-user';

const UserProfile = () => {
	const { form, avatarUrl } = useUpdateUser();

	console.log(avatarUrl);
	return (
		<div>
			<h1>Login</h1>

			{avatarUrl && <img src={avatarUrl} />}

			<form
				onSubmit={(e) => {
					e.preventDefault();
					e.stopPropagation();
					form.handleSubmit();
				}}
				noValidate
			>
				<form.Field name="name">
					{(field) => (
						<>
							<label htmlFor={field.name}>Nickname</label> <br />
							<input
								id={field.name}
								name={field.name}
								value={field.state.value}
								type="text"
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
				<form.Field name="avatar">
					{(field) => (
						<>
							<input
								type="file"
								onChange={(e) => {
									field.setValue(e.target.files[0]);
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

export default UserProfile;
