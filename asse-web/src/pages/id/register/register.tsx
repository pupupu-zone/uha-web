import React from 'react';

import useRegister from './use-register';
import { colorizeWord } from '@utils';

import Root, { Content } from './register.styles';

const generateWordGradient = (words: string[]) => {
	if (words.length <= 1) {
		words.push('ELEGANT');
	}

	if (words.length <= 2) {
		words.push('FALCON');
	}

	return words.map((word) => {
		return colorizeWord(word);
	});
};

const RegisterUnit = () => {
	const form = useRegister();

	const name = form.useStore((state) => state.values.name);
	const password = form.useStore((state) => state.values.password);
	const email = form.useStore((state) => state.values.email);

	// @TODO:
	// MAKE EACH FIELD SPLITTED TO 3 DIFFERENT COLORS
	const gradients = generateWordGradient([...name.split(' '), password, ...email.split('@')]);

	return (
		<Root $gradients={gradients}>
			<Content>
				<h1>Login</h1>

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
								<label htmlFor={field.name}>Your name</label> <br />
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
								{field.state.meta.errors
									? field.state.meta.errors.map((error) => (
											<React.Fragment key={`${error}`}>
												<em role="alert" style={{ display: 'block', color: 'red' }}>
													{error}
												</em>
												<br />
											</React.Fragment>
										))
									: null}
							</>
						)}
					</form.Field>

					<br />
					<form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
						{([canSubmit, isSubmitting]) => (
							<button type="submit" disabled={!canSubmit}>
								{isSubmitting ? '...' : 'Submit'}
							</button>
						)}
					</form.Subscribe>
				</form>
			</Content>
		</Root>
	);
};

export default RegisterUnit;
