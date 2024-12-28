import React from 'react';

import Icon from '../icon';
import Root, { Emoji } from './emojis.styles';
import { Button as AriaButton } from 'react-aria-components';

import useEmojis from './use-emojis';

import type { Props } from './emojis.d';

const Emojis = ({ color, onChange }: Props) => {
	const emojis = useEmojis();

	return (
		<Root>
			{emojis.map((emoji) => (
				<Emoji as={AriaButton} key={emoji} $color={color || '#fff'} onPress={() => onChange(emoji)}>
					{emoji}
				</Emoji>
			))}

			<Emoji as={AriaButton} $color="#fff">
				<Icon name="add" />
			</Emoji>
		</Root>
	);
};

export default Emojis;
