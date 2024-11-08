import styled, { css } from 'styled-components';

import type { StyleProps } from './toaster.d';

const types = {
	error: css`
		color: var(--error);
	`,
	success: css`
		color: #00a86b;
	`,
	blank: css`
		color: #000;
	`
};

export const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	padding-bottom: 4px;
	color: var(--label);
	font-size: 24px;
	line-height: 1;
	border: 2px solid var(--border);
	border-radius: 50%;
`;

export default styled.div<StyleProps>`
	z-index: 1000;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: min-content 1fr;
	gap: 16px;
	align-items: center;
	width: calc(100vw - 64px);
	max-width: 400px;
	padding: 16px;
	font-size: 14px;
	font-family: 'Nunito Sans', sans-serif;
	background-color: rgba(255 255 255 / 1);
	border-radius: 8px;
	backdrop-filter: blur(10px);

	${({ $type }) => types[$type || 'blank']}
`;
