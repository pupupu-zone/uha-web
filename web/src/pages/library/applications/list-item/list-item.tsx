import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { colorizeWord } from '@utils';
import { useBrokenImg } from '@hooks';
import { categorySelector } from '@data/categories/selectors';

import Root, { Name, LogoWrap, ImgLogo, EmojiLogo, TextLogo, Info, Category } from './list-item.styles';

import type { Props, UseLogoT } from './list-item.d';

const useLogo = ({ logoUrl, emoji, name }: UseLogoT) => {
	const { imageRef, isImageBroken, isImageLoading } = useBrokenImg();

	const Component = useMemo(() => {
		if (logoUrl && (!isImageBroken || isImageLoading)) {
			return <ImgLogo ref={imageRef} alt={name} src={logoUrl} />;
		}

		if (emoji) {
			return <EmojiLogo>{emoji}</EmojiLogo>;
		}

		return <TextLogo>{name[0] || '?'}</TextLogo>;
	}, [emoji, imageRef, isImageBroken, isImageLoading, logoUrl, name]);

	return Component;
};

const ListItem = (props: Props) => {
	const category = useSelector((store) => categorySelector(store, props.category_id));
	const LogoContent = useLogo({ logoUrl: props.logo_url, emoji: props.emoji, name: props.name });

	return (
		<Root>
			<LogoWrap $color={props.color || colorizeWord(props.name)}>{LogoContent}</LogoWrap>

			<Info>
				<Name>{props.name}</Name>

				<Category>{category.name}</Category>
			</Info>
		</Root>
	);
};

export default ListItem;
