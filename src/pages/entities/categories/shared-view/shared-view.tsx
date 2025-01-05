import React from 'react';

import { Button } from '@ui';
import Emojis from '@shared/emojis';
import Swatches from '@shared/swatches';
import { EntityRoot, EntityInput, EntityCaption } from '@shared/entities';
import Root, { Main, ColorPreview, EmojiPreview } from './shared-view.styles';

import { useIsTextDark } from '@hooks';
import { useStore } from '@tanstack/react-form';

import type { Props } from './shared-view.d';

const CategorySharedView = ({ form }: Props) => {
	const color = useStore(form.store, (state) => state.values.color);
	const emoji = useStore(form.store, (state) => state.values.emoji);
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
				<EmojiPreview $color={color}>{emoji}</EmojiPreview>

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
								placeholder="Category name"
							/>
						);
					}}
				</form.Field>

				<Main>
					<form.Field name="emoji">
						{(field) => {
							const onChangeHd = (nextEmoji: string) => {
								field.handleChange(nextEmoji);
							};

							return (
								<EntityRoot>
									<EntityCaption isTextDark={isTextDark} title="Logo Emoji" />

									<Emojis onChange={onChangeHd} color={color} set="categories" />
								</EntityRoot>
							);
						}}
					</form.Field>

					<form.Field name="color">
						{(field) => {
							const onChangeHd = (nextColor: string) => {
								field.handleChange(nextColor);
							};

							return (
								<EntityRoot>
									<EntityCaption isTextDark={isTextDark} title="Support Color" />

									<Swatches onChange={onChangeHd} />
								</EntityRoot>
							);
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

export default CategorySharedView;
