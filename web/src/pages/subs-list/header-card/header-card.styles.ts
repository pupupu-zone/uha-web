import styled from 'styled-components';

export const StubSelect = styled.div`
	font-weight: 400;
	font-size: 16px;
	white-space: nowrap;
	padding: 8px 16px;
	border-radius: 20px;
	border: 1px solid #999;
	color: #999;
`;

export const Title = styled.h1`
	display: grid;
	grid-auto-flow: column;
	white-space: nowrap;
	grid-auto-columns: min-content 1fr min-content;
	gap: 12px;
	align-items: baseline;

	font-weight: 700;
	font-size: 24px;
	color: #eee;
`;

export const Costs = styled.div`
	display: grid;
	grid-auto-flow: row;
	color: #eee;
`;

export const Digits = styled.h1`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: 1fr min-content;
	align-items: center;
	justify-content: space-between;
	gap: 2px;
	font-size: 50px;
	font-weight: 900;
	margin: 0;
	width: 100%;
	overflow: hidden;
	overflow-x: scroll;
	padding: 10px 0;
`;

export const Root2 = styled.div`
	width: calc(100vw - 48px);
	padding: 18px 24px;
	background-color: #232323;
	border-radius: 18px;
	justify-self: center;
	margin-top: 12px;
`;

export default styled.div`
	display: grid;
	grid-auto-rows: 1fr min-content;
	grid-auto-flow: row;
	gap: 12px;
	margin-top: calc(env(safe-area-inset-top) + 12px);
	justify-self: center;

	width: calc(100vw - 24px);
	background-color: #232323;
	border-radius: 18px;
	padding: 24px 36px;
	padding-top: 24px;
	box-shadow: 0 0 24px 0 rgba(0 0 0 / 0.5); #00000050;
`;
