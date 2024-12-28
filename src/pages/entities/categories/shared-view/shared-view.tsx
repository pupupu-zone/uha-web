import React from 'react';
import { Button, Swatches, Emojis } from '@ui';
import Root, { Main, ColorPreview, EmojiPreview, NameInput } from './shared-view.styles';

import { useIsTextDark } from '@hooks';

import type { Props } from './shared-view.d';

const CategorySharedView = ({ form }: Props) => {
	const color = form.useStore((state) => state.values.color);
	const emoji = form.useStore((state) => state.values.emoji);
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
							<NameInput
								autoCorrect="off"
								autoCapitalize="off"
								autoComplete="off"
								$isTextDark={isTextDark}
								value={field.state.value}
								onChange={onChangeHd}
								placeholder="Category name"
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

					<form.Field name="emoji">
						{(field) => {
							const onChangeHd = (e: React.ChangeEvent<HTMLInputElement>) => {
								field.handleChange(e.target.value);
							};

							return <Emojis onChange={onChangeHd} />;
						}}
					</form.Field>
				</Main>

				<Button isFullWidth>Create</Button>
			</Root>
		</>
	);
};

export default CategorySharedView;
