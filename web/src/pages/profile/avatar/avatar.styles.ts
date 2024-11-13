import styled, { css } from 'styled-components';
import { Button as AdobeButton } from 'react-aria-components';
import type { AvatarStyledProps } from './avatar.d';

import gradients from './gradients';

export const Edit = styled(AdobeButton)<{ $withAvatar: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	font-weight: 600;
	color: var(--primary-button-text);
	border: none;
	font-size: 16px;
	top: 70%;
	background-color: oklch(var(--primary-button) / 0.6);
	transition: top 0.2s ease-in-out;
	${({ $withAvatar }) =>
		$withAvatar &&
		css`
			top: 0%;
			font-size: 24px;
			background-color: oklch(var(--primary-button) / 0.8);
		`}
`;

export const ImageSelector = styled.input`
	position: absolute;
	inset: 0;
`;

export const Image = styled.img`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
`;

export const Initials = styled.h1`
	color: var(--primary-text);
	font-weight: 700;
	font-size: 36px;
`;

export const ImageWrap = styled.div<AvatarStyledProps>`
	display: grid;
	width: 100%;
	height: 100%;
	place-items: center;
	${({ $gradientId }) => gradients[$gradientId]}
	clip-path: url('#squircle');
`;

export default styled.label`
	position: relative;
	justify-self: center;
	width: 128px;
	min-width: 128px;
	height: 128px;
	min-height: 128px;
	margin-top: 36px;
`;
