import styled, { css } from 'styled-components';
import { H3, Text } from '../typography';

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
	font-size: 24px;
	color: var(--label);
	width: 36px;
	height: 36px;
	border-radius: 50%;
	border: 2px solid var(--border);
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1;
	padding-bottom: 4px;
`;

export const Content = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	gap: 8px;
	grid-auto-flow: row;
	grid-template-columns: 1fr;
`;

export const Title = styled(H3)``;

export const Body = styled(Text)``;

export default styled.div<StyleProps>`
	display: grid;
	grid-auto-flow: column;
	gap: 16px;
	align-items: center;
	grid-template-columns: min-content 1fr;
	z-index: 1000;
	width: calc(100vw - 64px);
	max-width: 400px;
	padding: 16px;
	font-size: 14px;
	font-family: 'Nunito Sans', sans-serif;
	border-radius: 8px;
	background-color: rgba(255, 255, 255, 1);
	backdrop-filter: blur(10px);

	${({ $type }) => types[$type || 'blank']}
`;
