import styled from 'styled-components';
import { gradients } from '@hooks/use-gradient-id';
import { Button as AriaButton } from 'react-aria-components';

import type { AvatarStyledProps } from './avatar-picker.d';

export const Loader = styled.div<{ $isFetching: boolean }>`
	/* stylelint-disable declaration-block-no-redundant-longhand-properties */

	position: absolute;
	top: ${({ $isFetching }) => ($isFetching ? '0' : '100%')};
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--light-text);
	background-color: oklch(var(--primary-button) / 0.8);
	opacity: ${({ $isFetching }) => ($isFetching ? '1' : '0')};
	transition-timing-function: ease-in-out;
	transition-duration: 200ms;
	transition-property: top, opacity;
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
	transition: transform 100ms ease-in-out;

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
