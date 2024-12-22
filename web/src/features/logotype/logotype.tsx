import React, { useMemo } from 'react';

import { useBrokenImg } from '@hooks';

import { ImgLogo, EmojiLogo, TextLogo } from './logotype.styles';

import type { Props, UseLogoT } from './logotype.d';

const useLogo = ({ logoUrl, emoji, name, size }: UseLogoT) => {
	const { imageRef, isImageBroken, isImageLoading } = useBrokenImg();

	const Component = useMemo(() => {
		if (logoUrl && (!isImageBroken || isImageLoading)) {
			return <ImgLogo ref={imageRef} alt={name} src={logoUrl} $width={`${size}px`} $height={`${size}px`} />;
		}

		if (emoji) {
			return <EmojiLogo>{emoji}</EmojiLogo>;
		}

		return <TextLogo>{name[0] || '?'}</TextLogo>;
	}, [emoji, imageRef, isImageBroken, isImageLoading, logoUrl, name]);

	return Component;
};

const Logotype = ({ logoUrl, emoji, name, size = 48 }: Props) => {
	const LogoContent = useLogo({ logoUrl, emoji, name, size });

	return LogoContent;
};

export default Logotype;
