import styled from 'styled-components';
import { Button as AriaButton } from 'react-aria-components';
import gradients from './gradients';
import type { AvatarStyledProps } from './avatar.d';

export const CropperWrap = styled.div`
	position: relative;
	width: 100%;
	aspect-ratio: 1 / 1;
`;

export const Delete = styled(AriaButton)`
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	margin: 0;
	padding: 0;
	color: var(--error);
	background-color: var(--input-bg);
	border: none;
	border-radius: 50%;
	transition: transform 0.2s ease-in-out;

	&:focus-visible {
		transform: scale(0.9);
	}
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

export const ImageWrap = styled(AriaButton)<AvatarStyledProps>`
	display: grid;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	border: none;
	place-items: center;
	${({ $gradientId }) => gradients[$gradientId]}
	clip-path: url('#squircle');
`;

export default styled.div`
	position: relative;
	justify-self: center;
	width: 128px;
	min-width: 128px;
	height: 128px;
	min-height: 128px;
	margin-top: 36px;
`;
