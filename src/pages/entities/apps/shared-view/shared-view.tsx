import React from 'react';

import { Button } from '@ui';
import Swatches from '@shared/swatches';
import TagsInput from '@shared/tags-input';
import AvatarPicker from '@shared/avatar-picker';
import EntityPicker from '@shared/entity-picker';
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

						return <AvatarPicker name={appName} url={field.state.value} onChange={onAvatarChange} />;
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
								placeholder="App name"
							/>
						);
					}}
				</form.Field>

				<Main>
					<form.Field name="category_id">
						{(field) => {
							const onChangeHd = (nextCategoryId: string) => {
								field.handleChange(nextCategoryId);
							};

							return (
								<EntityPicker
									isTextDark={isTextDark}
									entity="categories"
									entityId={field.state.value}
									onChange={onChangeHd}
								/>
							);
						}}
					</form.Field>

					<form.Field name="aliases">
						{(field) => {
							const onAliasesChange = (tags: string[]) => {
								field.handleChange(tags);
							};

							return <TagsInput isTextDark={isTextDark} tags={field.state.value} onChange={onAliasesChange} />;
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
