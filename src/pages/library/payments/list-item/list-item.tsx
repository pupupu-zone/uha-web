import React, { useMemo } from 'react';

import Root, { Name, LogoWrap, EmojiLogo, TextLogo, Info, Comment } from './list-item.styles';

import type { Props, UseLogoT } from './list-item.d';

const useLogo = ({ emoji, name }: UseLogoT) => {
	const Component = useMemo(() => {
		if (emoji) {
			return <EmojiLogo>{emoji}</EmojiLogo>;
		}

		return <TextLogo>{name[0] || '?'}</TextLogo>;
	}, [emoji, name]);

	return Component;
};

const ListItem = (props: Props) => {
	const LogoContent = useLogo({ emoji: props.emoji, name: props.name });

	return (
		<Root>
			<LogoWrap $color={props.color}>{LogoContent}</LogoWrap>

			<Info>
				<Name>{props.name}</Name>

				{props.comment && <Comment>{props.comment}</Comment>}
			</Info>
		</Root>
	);
};

export default ListItem;
