import React, { useState } from 'react';

import data from '@emoji-mart/data';
import useDefaultEmoji from './use-default-emoji';

import Picker from '@emoji-mart/react';
import Root, { Emoji, Label, PickerWrap } from './emoji-field.styles';

import type { Props } from './emoji-field.d';

const EmojiField = ({ label, value, onChange }: Props) => {
	useDefaultEmoji(value, onChange);
	const [isVisible, setIsVisible] = useState(true);

	return (
		<Root>
			<Label>
				{label || 'Emoji'} <Emoji>{value}</Emoji>
			</Label>

			{/*
			<DefaultEmojis>
				<
			</DefaultEmojis> */}

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
