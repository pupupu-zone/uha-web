import { createGlobalStyle } from 'styled-components';

export const EntityDateStyle = createGlobalStyle<{ $isTextDark: boolean }>`
	/* stylelint-disable selector-class-pattern */

	.react-aria-DateInput {
		display: grid;
		grid-auto-columns: min-content;
		grid-auto-flow: column;
		gap: 0;

			padding: 0;
	font-weight: 700;
	font-size: 24px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 32px;
	text-align: left;

		width: 100%;
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-text)' : 'var(--bg-color)')};
	background-color: transparent;
	border: none;
	}
`;
