import React from 'react';

import { Button } from '@ui';
import Emojis from '@features/emojis';
import Swatches from '@features/swatches';
import { Input as AriaInput } from 'react-aria-components';
import Root, { Main, ColorPreview, EmojiPreview, NameInput, CommentInput } from './shared-view.styles';

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
							<NameInput
								autoCorrect="off"
								autoCapitalize="off"
								autoComplete="off"
								$isTextDark={isTextDark}
								value={field.state.value}
								onChange={onChangeHd}
								placeholder="Payment method name"
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

							return <Emojis onChange={onChangeHd} color={color} set="methods" maxRows={3} />;
						}}
					</form.Field>

					<form.Field name="color">
						{(field) => {
							const onChangeHd = (nextColor: string) => {
								field.handleChange(nextColor);
							};

							return <Swatches onChange={onChangeHd} maxRows={3} />;
						}}
					</form.Field>

					<form.Field name="comment">
						{(field) => {
							const onChangeHd = (e: React.ChangeEvent<HTMLInputElement>) => {
								field.handleChange(e.target.value);
							};

							return (
								<CommentInput
									as={AriaInput}
									autoCorrect="off"
									autoCapitalize="off"
									autoComplete="off"
									$isTextDark={isTextDark}
									type="text"
									placeholder="Comment"
									onChange={onChangeHd}
									value={field.state.value}
								/>
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
