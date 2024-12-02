import React from 'react';

import { LargeText } from '@ui';
import Root, { EmojiWrap, Emoji, Info, Name } from './list-item.styles';

import type { Props } from './list-item.d';

const ListItem = ({ color, emoji, name }: Props) => {
	return (
		<Root>
			<EmojiWrap $color={color}>
				<Emoji>{emoji}</Emoji>
			</EmojiWrap>

			<Info>
				<Name as={LargeText}>{name}</Name>
			</Info>
		</Root>
	);
};

export default ListItem;
