import styled, { css } from 'styled-components';
import { Button as AriaButton, Input as AriaInput } from 'react-aria-components';

const h1Styles = css`
	padding: 0;
	font-weight: 700;
	font-size: 24px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 32px;
	text-align: left;
`;

export const Input = styled(AriaInput)<{ $isTextDark: boolean }>`
	${h1Styles}
	width: 100%;
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-text)' : 'var(--bg-color)')};
	background-color: transparent;
	border: none;

	&:focus {
		box-shadow: none;
	}
`;

export const Button = styled(AriaButton)<{ $isTextDark: boolean; $isSelected: boolean; $isSearchMode: boolean }>`
	${h1Styles}
	width: fit-content;
	margin: 0;
	padding: 0;
	padding-top: ${({ $isSearchMode }) => ($isSearchMode ? '0' : '4px')};
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-text)' : 'var(--bg-color)')};
	background-color: transparent;
	border: none;
	opacity: ${({ $isSelected }) => ($isSelected ? 1 : 0.6)};

	&[data-disabled] {
		opacity: 0.6;
	}
`;

export const Entities = styled.div`
	white-space: nowrap;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 18px;
`;
