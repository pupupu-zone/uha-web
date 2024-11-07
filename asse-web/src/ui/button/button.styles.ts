import styled, { css } from 'styled-components';

import type { StyleProps } from './button.d';

const colors = {
	blue: css`
		color: #fff;
		background-color: #4d70f5;

		&:active,
		&[data-pressed] {
			background-color: #445abe;
		}

		&:hover {
			background-color: #4d70f5;
			box-shadow: 0 4px 28px rgba(77 112 245 / 0.22);
		}
	`
};

const sizes = {
	medium: css`
		padding: 12px 24px;
		font-size: 18px;
		line-height: 1.2;
	`
};

const fullWidth = css`
	width: 100%;
`;

const fitWidth = css`
	width: fit-content;
`;

export default styled.button<StyleProps>`
	display: inline-flex;
	justify-content: center;
	font-weight: 500;
	font-family: 'Nunito Sans', sans-serif;
	border: none;
	border-radius: 12px;
	cursor: pointer;
	transition-timing-function: ease-out;
	transition-duration: 0.15s;
	transition-property: background-color, transform, box-shadow;

	&[data-pressed] {
		transform: scale(0.97);
	}

	&[data-disabled] {
		cursor: not-allowed;
		opacity: 0.1;
		pointer-events: none;
	}

	${({ $color }) => colors[$color || 'blue']}
	${({ $size }) => sizes[$size || 'medium']}
	${({ $isFullWidth }) => ($isFullWidth ? fullWidth : fitWidth)}
`;
