import styled, { css } from 'styled-components';

const focused = css`
	box-shadow: 0 0 0 3px oklch(var(--blue-focus) / 0.5);
`;

export const SearchLabel = styled.label`
	color: var(--label);
`;

export const SearchInput = styled.input`
	width: 100%;
	height: 100%;
	margin: 0 0 0 8px;
	padding: 0;
	color: var(--primary-text);
	font-size: 18px;
	background-color: transparent;
	border: none;

	&:focus-visible {
		box-shadow: none;
	}
`;

export default styled.div<{ $isFocused: boolean }>`
	display: flex;
	align-items: center;
	height: 64px;
	padding-left: 16px;
	background-color: var(--input-bg);
	border: 1px solid var(--input-border);
	border-radius: 8px;

	${(props) => props.$isFocused && focused}

	& > * {
		margin-right: 8px;
	}
`;
