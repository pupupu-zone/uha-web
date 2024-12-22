import styled from 'styled-components';

export const ImgLogo = styled.img<{ $width: string; $height: string }>`
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};
	overflow: hidden;
	clip-path: url('#squircle');
	aspect-ratio: 1;
`;

export const EmojiLogo = styled.div`
	font-size: 32px;
`;

export const TextLogo = styled.p`
	font-size: 32px;
`;
