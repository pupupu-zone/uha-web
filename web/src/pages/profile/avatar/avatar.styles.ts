import styled from 'styled-components';
import type { AvatarStyledProps } from './avatar.d';

import gradients from './gradients';

export const Image = styled.img`
	width: 100%;
	height: 100%;
`;

export const Initials = styled.h1`
	color: var(--primary-text);
	font-weight: 700;
	font-size: 36px;
`;

export default styled.div<AvatarStyledProps>`
	display: grid;
	place-items: center;
	justify-self: center;
	width: 128px;
	height: 128px;
	margin-top: 36px;
	clip-path: url('#squircle');
	${({ $gradientId }) => gradients[$gradientId]}
`;
