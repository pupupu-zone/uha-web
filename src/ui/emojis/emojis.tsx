import React from 'react';

import Icon from '../icon';
import EmojiPicker from '@emoji-mart/react';
import Drawer, { useDrawer } from '../drawer';
import Root, { Emoji, PickerWrap } from './emojis.styles';
import { Button as AriaButton } from 'react-aria-components';

import useEmojis from './use-emojis';
import emojiData from '@emoji-mart/data';

import type { Props } from './emojis.d';

const withPicker = import.meta.env.VITE_REACT_WITH_EMOJI_PICKER === 'true';

const Emojis = ({ color, onChange }: Props) => {
	const drawer = useDrawer();
	const emojis = useEmojis();

	return (
		<>
			<Root>
				{emojis.map((emoji) => (
					<Emoji as={AriaButton} key={emoji} $color={color || '#fff'} onPress={() => onChange(emoji)}>
						{emoji}
					</Emoji>
				))}

				{withPicker && (
					<Emoji as={AriaButton} $color="#fff" onPress={drawer.openDrawer}>
						<Icon name="add" />
					</Emoji>
				)}
			</Root>

			{withPicker && (
				<Drawer {...drawer}>
					<PickerWrap>
						<EmojiPicker
							dynamicWidth
							maxFrequentRows={0}
							previewPosition="none"
							locale="en"
							data={emojiData}
							// @ts-ignore
							onEmojiSelect={(emoji) => {
								onChange(emoji.native);
								drawer.closeDrawer();
							}}
							emojiSize={28}
							theme="light"
						/>
					</PickerWrap>
				</Drawer>
			)}
		</>
	);
};

export default Emojis;
