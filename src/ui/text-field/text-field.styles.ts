import styled from 'styled-components';
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
	position: absolute;
	top: 100%;
	display: grid;
	grid-auto-flow: row;
	gap: 2px;
	margin-top: 2px;
`;

export const Input = styled.input`
	width: 100%;
	margin: 0;
	padding: 20px 24px;
	color: var(--primary-text);
	font-size: 18px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 20px;
	background-color: transparent;
	border: none;

	&:focus-visible {
		outline: none;
		box-shadow: none;
	}
`;

export const Label = styled.label<StyleProps>`
	position: relative;
	padding: 12px;
	color: ${({ $showErrors }) => ($showErrors ? 'var(--light-text)' : 'var(--label)')};
	font-weight: 500;
	font-size: 16px;
	line-height: 1;
	background-color: ${({ $showErrors }) => ($showErrors ? 'var(--error)' : 'var(--input-border)')};
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
`;

export default styled.div<StyleProps>`
	position: relative;
	display: grid;
	grid-auto-flow: row;
	width: ${({ $isFullWidth }) => ($isFullWidth ? '100%' : 'auto')};
	background-color: var(--input-bg);
	border: 1px solid transparent;
	border-color: ${({ $showErrors }) => ($showErrors ? `var(--error)` : 'var(--input-border)')};
	border-radius: 8px;
	box-shadow: ${({ $isFocused }) => ($isFocused ? '0 0 0 3px oklch(var(--blue-focus) / 0.5)' : 'none')};
`;
