import React from 'react';

import { Button } from '@ui';
import Swatches from '@shared/swatches';
import TagsInput from '@shared/tags-input';
import AvatarPicker from '@shared/avatar-picker';
import Root, { Main, ColorPreview } from './shared-view.styles';
import { EntityRoot, EntityInput, EntityPicker, EntityCaption } from '@shared/entities';

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
							<EntityInput
								isTextDark={isTextDark}
								align="center"
								autoCorrect="off"
								autoCapitalize="off"
								autoComplete="off"
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
								<EntityRoot>
									<EntityCaption isTextDark={isTextDark} title="Category" />

									<EntityPicker
										isTextDark={isTextDark}
										entity="categories"
										entityId={field.state.value}
										onChange={onChangeHd}
									/>
								</EntityRoot>
							);
						}}
					</form.Field>

					<form.Field name="aliases">
						{(field) => {
							const onAliasesChange = (tags: string[]) => {
								field.handleChange(tags);
							};

							return (
								<EntityRoot>
									<EntityCaption isTextDark={isTextDark} title="Aliases" />

									<TagsInput isTextDark={isTextDark} tags={field.state.value} onChange={onAliasesChange} />
								</EntityRoot>
							);
						}}
					</form.Field>

					<form.Field name="color">
						{(field) => (
							<EntityRoot>
								<EntityCaption isTextDark={isTextDark} title="Color" />

								<Swatches onChange={field.handleChange} />
							</EntityRoot>
						)}
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
