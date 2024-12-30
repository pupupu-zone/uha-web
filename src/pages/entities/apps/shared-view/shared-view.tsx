import React from 'react';

import { Button } from '@ui';
import Avatar from '@features/avatar';
import Swatches from '@features/swatches';
import Root, { Main, ColorPreview, NameInput } from './shared-view.styles';

import { useIsTextDark } from '@hooks';
import { useStore } from '@tanstack/react-form';

import type { Props } from './shared-view.d';

const AppSharedView = ({ form }: Props) => {
	const color = useStore(form.store, (state) => state.values.color);
	const appName = useStore(form.store, (state) => state.values.name);
	const logoUrl = useStore(form.store, (state) => state.values.logo_url);

	const isTextDark = useIsTextDark(color, 1);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		form.handleSubmit();
	};

	const onAvatarChange = (newBlob?: File) => {
		if (!newBlob) {
			form.setFieldValue('logo_url', '');
			form.setFieldValue('avatar', '');

			return;
		}
	};

	return (
		<>
			<ColorPreview $color={color} />

			<Root onSubmit={onSubmit} noValidate>
				<Avatar name={appName} url={logoUrl} onChange={onAvatarChange} />

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
					<form.Field name="color">
						{(field) => {
							const onChangeHd = (nextColor: string) => {
								field.handleChange(nextColor);
							};

							return <Swatches onChange={onChangeHd} />;
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
