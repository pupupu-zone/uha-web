import React, { useMemo } from 'react';

import { useInitials, useGradientId, useBrokenImg } from '@hooks';
import Root, { ImgLogo, EmojiLogo, TextLogo } from './logo-view.styles';

import type { Props } from './logo-view.d';

const useLogo = ({ logoUrl, emoji, name, size }: Omit<Props, 'color'>) => {
	const initials = useInitials(name);
	const { imageRef, isImageBroken, isImageLoading } = useBrokenImg();

	const Component = useMemo(() => {
		if (logoUrl && (!isImageBroken || isImageLoading)) {
			return <ImgLogo ref={imageRef} alt={name} src={logoUrl} />;
		}

		if (emoji) {
			return <EmojiLogo $size={size}>{emoji}</EmojiLogo>;
		}

		return <TextLogo $size={size}>{initials || '?'}</TextLogo>;
	}, [emoji, imageRef, isImageBroken, isImageLoading, logoUrl, name]);

	return Component;
};

const LogoView = ({ name, emoji, color, logoUrl, size = 48 }: Props) => {
	const gradientId = useGradientId(name);
	const logoContent = useLogo({ logoUrl, emoji, name, size });

	return (
		<Root $gradientId={gradientId} $size={size} $color={color}>
			{logoContent}
		</Root>
	);
};

export default LogoView;
