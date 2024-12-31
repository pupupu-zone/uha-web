import styled from 'styled-components';
import { gradients } from '@hooks/use-gradient-id';

export const ImgLogo = styled.img`
	width: 100%;
	height: 100%;
`;

export const EmojiLogo = styled.div<{ $size: number }>`
	font-size: ${({ $size }) => $size / 2}px;
`;

export const TextLogo = styled.div<{ $size: number }>`
	font-weight: 500;
	font-size: ${({ $size }) => $size / 3}px;
`;

export default styled.div<{ $gradientId: number; $size: number; $color?: string }>`
	display: grid;
	width: ${({ $size }) => $size}px;
	height: 100%;
	margin: 0;
	padding: 0;
	border: none;
	place-items: center;
	${({ $gradientId, $color }) => {
		if ($color) return `background-color: ${$color};`;
		return gradients[$gradientId];
	}}
	clip-path: url('#squircle');
	aspect-ratio: 1 / 1;
`;
