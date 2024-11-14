import React from 'react';

import { useUpdateName } from './hooks';

import Root, { NameInput } from './username.styles';

const UserName = () => {
	const { form } = useUpdateName();
	const isValid = form.useStore((store) => store.isValid && !store.isPristine);

	const onSubmitHd = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (!isValid) return;

		form.handleSubmit();
	};

	return (
		<form onSubmit={onSubmitHd} onBlur={onSubmitHd} noValidate>
			<Root>
				<form.Field name="name">
					{(field) => {
						const onChangeHd = (e: React.ChangeEvent<HTMLInputElement>) => {
							field.handleChange(e.target.value);
						};

						return (
							<NameInput
								id={field.name}
								type="text"
								autoComplete="off"
								name={field.name}
								onChange={onChangeHd}
								value={field.state.value}
							/>
						);
					}}
				</form.Field>
			</Root>
		</form>
	);
};
export default UserName;
