import styled, { css } from 'styled-components';
import { SmallText } from '../typography';

import type { StyleProps } from './text-field.d';

export const ErrorMessage = styled(SmallText)`
	color: var(--error);
	font-weight: 500;
	line-height: 1;
	font-variant-caps: all-small-caps;
	white-space: nowrap;
`;

export const ErrorsList = styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 2px;
	margin-top: 2px;
`;

export const Label = styled.label<{ $isPlaceholder: boolean }>`
	position: absolute;
	top: 23px;
	left: 24px;
	z-index: 1;
	color: ${({ $isPlaceholder }) => ($isPlaceholder ? 'var(--placeholder)' : 'var(--label)')};
	font-size: 16px;
	line-height: 1;
`;

const focused = css`
	padding: 28px 16px 12px;

	& + ${Label} {
		top: 10px;
		left: 16px;
		font-size: 14px;
		line-height: 1;
	}
`;

export const Input = styled.input<StyleProps>`
	z-index: 2;
	width: 100%;
	margin: 0;
	padding: 20px 24px;
	color: var(--primary-text);
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
	background-color: var(--input-bg);
	border: 1px solid transparent;
	border-color: ${({ $withErrors }) => ($withErrors ? `var(--error)` : 'var(--border)')};
	border-radius: 8px;
`;

export default styled.div<StyleProps>`
	display: inline-flex;
	flex-direction: column;
	width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'auto')};
`;
