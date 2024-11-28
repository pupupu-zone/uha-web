import React from 'react';

import { LargeText } from '@ui';
import Root, { EmojiWrap, Emoji, Name } from './list-item.styles';

import type { Props } from './list-item.d';

const ListItem = ({ color, emoji, name }: Props) => {
	return (
		<Root>
			<EmojiWrap $color={color}>
				<Emoji>{emoji}</Emoji>
			</EmojiWrap>

			<Name>
				<LargeText>{name}</LargeText>
			</Name>
		</Root>
	);
};

export default ListItem;
