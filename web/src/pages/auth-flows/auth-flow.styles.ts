import styled, { createGlobalStyle } from 'styled-components';
import { H1 } from '@ui';

export const PageName = styled.h1`
	color: var(--primary-text);
	font-weight: 700;
	font-size: 24px;
	font-family: 'Nunito Sans', sans-serif;
	line-height: 32px;

	&:not(.active) {
		opacity: 0.45;

		&:active,
		&:hover {
			opacity: 0.75;
		}
	}
`;

export const Header = styled.header`
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: min-content min-content 1fr;
	gap: 12px;
	align-items: center;
	justify-content: left;
	white-space: nowrap;

	& > * {
		text-align: right;
	}
`;

export const HighTag = styled(H1)`
	color: #a6749c;
	font-weight: 900;
	font-size: calc(100vw / 100 * 5.5);
	line-height: 1;
`;

export const LowTag = styled(H1)`
	color: #efa7a7;
	font-weight: 900;
	font-size: calc(100vw / 100 * 22.8);
	line-height: 1;
`;

export const Test = createGlobalStyle`
// 	html {
// 		// background: linear-gradient(to top, #ffeceb, #fff);
// background: linear-gradient(to bottom, #88E7DC, #54C8BC);
// background: #F6F6F6;
// 		}
`;

export const TagLine = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const PageRoot = styled.div`
	display: grid;
	grid-auto-rows: max-content;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
	gap: 36px;
	margin: 0;
	padding: 24px 32px;
	padding-bottom: calc(env(safe-area-inset-bottom) + 24px);
	background-color: var(--popup-bg);
	border-top-left-radius: 36px;
	border-top-right-radius: 36px;
	box-shadow: 0 0 10px 0 rgba(0 0 0 / 0.05);
`;

export default styled.div`
	display: grid;
	grid-auto-rows: 1fr min-content;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
`;
