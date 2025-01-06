import { createGlobalStyle } from 'styled-components';

import type { StyleProps } from './entity-date.d';

export const EntityDateStyle = createGlobalStyle<StyleProps>`
	/* stylelint-disable selector-class-pattern */

	.react-aria-DateInput {
		display: grid;
		grid-auto-columns: min-content;
		grid-auto-flow: column;
		gap: 0;
		width: 100%;
		padding: 0;
		color: ${({ $isTextDark }: StyleProps) => ($isTextDark ? 'var(--primary-text)' : 'var(--bg-color)')};
		font-weight: 700;
		font-size: 24px;
		font-family: 'Nunito Sans', sans-serif;
		line-height: 32px;
		text-align: left;
		background-color: transparent;
		border: none;
	}
`;
