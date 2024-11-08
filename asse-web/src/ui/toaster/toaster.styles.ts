import styled, { css } from 'styled-components';

import type { StyleProps } from './toaster.d';

const types = {
	error: css`
		color: #ff3636;
		background-color: #ffd7db;
	`,
	success: css`
		color: #00a86b;
		background-color: #d9f8e9;
	`,
	blank: css`
		color: #000;
		background-color: #fff;
	`
};

export default styled.div<StyleProps>`
	padding: 16px;
	font-size: 14px;
	font-family: 'Nunito Sans', sans-serif;
	border-radius: 8px;

	${({ $type }) => types[$type || 'blank']}
`;
