import React, { useEffect, useState } from 'react';

import data from '@emoji-mart/data';
import useGetEmojis from './use-get-emojis';

import Icon from '../icon';
import Picker from '@emoji-mart/react';
import { Button as AriaButton } from 'react-aria-components';
import Root, { Emoji, Label, PickerWrap, EmojiSuggestions, PredefinedEmoji } from './emoji-field.styles';

import type { Props } from './emoji-field.d';

const EmojiField = ({ label, value, onChange }: Props) => {
	const predefinedEmojis = useGetEmojis();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (value) return;

		onChange(predefinedEmojis[0]);
	}, [value, onChange, predefinedEmojis]);

	return (
		<Root>
			<Label>
				{label || 'Emoji'} <Emoji>{value}</Emoji>
			</Label>

			<EmojiSuggestions>
				{predefinedEmojis.map((emoji) => {
					const onSelectEmoji = () => {
						onChange(emoji);
						setIsVisible(false);
					};

					return (
						<PredefinedEmoji key={emoji} as={AriaButton} onPress={onSelectEmoji}>
							{emoji}
						</PredefinedEmoji>
					);
				})}

				<PredefinedEmoji as={AriaButton} onPress={() => setIsVisible((prev) => !prev)}>
					<Icon name="add" />
				</PredefinedEmoji>
			</EmojiSuggestions>

			{isVisible && (
				<PickerWrap>
					<Picker
						dynamicWidth
						maxFrequentRows={0}
						previewPosition="none"
						locale="en"
						data={data}
						// @ts-ignore
						onEmojiSelect={(emoji) => {
							onChange(emoji.native);
							setIsVisible(false);
						}}
						theme="light"
					/>
				</PickerWrap>
			)}
		</Root>
	);
};

export default React.memo(EmojiField);
