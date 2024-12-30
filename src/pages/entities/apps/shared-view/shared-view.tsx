import React from 'react';

import { Button } from '@ui';
import Avatar from '@shared/avatar';
import Swatches from '@shared/swatches';
import Root, { Main, ColorPreview, NameInput } from './shared-view.styles';

import { useIsTextDark } from '@hooks';
import { useStore } from '@tanstack/react-form';

import type { Props } from './shared-view.d';

const AppSharedView = ({ form }: Props) => {
	const color = useStore(form.store, (state) => state.values.color);
	const appName = useStore(form.store, (state) => state.values.name);

	const isTextDark = useIsTextDark(color, 1);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		form.handleSubmit();
	};

	return (
		<>
			<ColorPreview $color={color} />

			<Root onSubmit={onSubmit} noValidate>
				<form.Field name="avatar">
					{(field) => {
						const onAvatarChange = (newBlob: string = '') => {
							field.handleChange(newBlob);
						};

						return <Avatar name={appName} url={field.state.value} onChange={onAvatarChange} />;
					}}
				</form.Field>

				<form.Field name="name">
					{(field) => {
						const onChangeHd = (e: React.ChangeEvent<HTMLInputElement>) => {
							field.handleChange(e.target.value);
						};

						return (
							<NameInput
								autoCorrect="off"
								autoCapitalize="off"
								autoComplete="off"
								$isTextDark={isTextDark}
								value={field.state.value}
								onChange={onChangeHd}
								placeholder="Application name"
							/>
						);
					}}
				</form.Field>

				<Main>
					<form.Field name="category_id">
						{(field) => {
							const onChangeHd = (e: React.ChangeEvent<HTMLSelectElement>) => {
								field.handleChange(e.target.value);
							};

							return (
								<select value={field.state.value} onChange={onChangeHd}>
									<option value="">Select a category</option>
									<option value="1">Category 1</option>
									<option value="2">Category 2</option>
								</select>
							);
						}}
					</form.Field>

					<form.Field name="color">
						{(field) => {
							return <Swatches onChange={field.handleChange} />;
						}}
					</form.Field>
				</Main>

				<Button isFullWidth isGlowing type="submit">
					Create
				</Button>
			</Root>
		</>
	);
};

export default AppSharedView;
