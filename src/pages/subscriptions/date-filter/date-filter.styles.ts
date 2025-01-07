import styled, { createGlobalStyle } from 'styled-components';

export const DateFilterStyles = createGlobalStyle`
	/* stylelint-disable selector-class-pattern */

	.react-aria-Group {
		display: grid;
		grid-auto-columns: min-content;
		grid-auto-flow: row;
		gap: 12px;
		align-items: center;
	}

	.react-aria-DateInput {
		display: grid;
		grid-auto-columns: min-content;
		grid-auto-flow: column;
		gap: 0;
		width: 100%;
		padding: 0;
		font-weight: 700;
		font-size: 5vw;
		font-family: 'Nunito Sans', sans-serif;
		line-height: 32px;
		text-align: left;
		background-color: transparent;
		border: none;
	}
`;

export default styled.div`
	display: grid;
	place-self: center;
	grid-auto-flow: column;
	gap: 18px;
	width: calc(100vw - 48px);
	margin-top: 18px;
	margin-bottom: 36px;
	padding: 24px 36px;
	background-color: rgba(0 0 0 / 0.1);
	border-radius: 12px;
`;
