import styled, { css } from 'styled-components';
import { SmallText } from '../typography';

import type { StyleProps } from './text-field.d';

export const ErrorMessage = styled(SmallText)`
	color: #eb5757;
	font-weight: 500;
	line-height: 1;
	font-variant-caps: all-small-caps;
	white-space: nowrap;

	& + & {
		margin-left: 8px;
	}
`;

export const ErrorsList = styled.div`
	display: wrap;
	flex-wrap: wrap;
	gap: 2px;
	margin-top: 2px;
`;

export const Label = styled.label`
	position: absolute;
	top: 20px;
	left: 24px;
	z-index: 1;
	color: #9597a0;
	font-size: 16px;
	line-height: 19px;
`;

const focused = css`
	padding: 28px 16px 12px;

	& + ${Label} {
		top: 10px;
		left: 16px;
		font-size: 14px;
		line-height: 16px;
	}
`;

export const Input = styled.input<StyleProps>`
	z-index: 2;
	width: 100%;
	margin: 0;
	padding: 20px 24px;
	color: #000;
	font-size: 18px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 20px;
	background-color: transparent;
	border: none;
	border-radius: 8px;

	&:not(:placeholder-shown),
	&:focus {
		${focused}
		&:autofill {
			padding: 24px 16px;
		}
	}
`;

export const InputRoot = styled.div<StyleProps>`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	background-color: #f8faff;
	border: 1px solid transparent;
	border-color: ${({ $withErrors }) => ($withErrors ? `#eb5757` : '#aaa')};
	border-radius: 8px;
`;

export default styled.div<StyleProps>`
	display: inline-flex;
	flex-direction: column;
	width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'auto')};
`;
