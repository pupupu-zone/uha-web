import styled from 'styled-components';

export const R3 = styled.div`
	height: 64px;
	width: 64px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #232323;
	border-radius: 18px;
	box-shadow: 0 0 24px 0 rgba(0 0 0 / 0.5); #00000050;
	color: #999;
	opacity: 0.8;

	&.active {
		color: var(--bg-color);
		opacity: 1;
	}
`;

export const R2 = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-auto-columns: 1fr;
	grid-auto-rows: 1fr 1fr;
	width: 100%;
	gap: 18px;
	justify-self: center;
`;

export const R = styled.div`
	display: grid;
	grid-auto-flow: column;
	align-self: center;
	justify-self: center;
	grid-auto-columns: 1fr min-content;
	gap: 18px;
	width: calc(100vw - 36px);
	margin-top: 18px;
	margin-bottom: 36px;
`;

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

export const Digits = styled.h1`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: 1fr min-content;
	align-items: center;
	justify-content: space-between;
	gap: 2px;
	font-size: 36px;
	font-weight: 900;
	margin: 0;
	width: 100%;
	overflow: hidden;
	overflow-x: scroll;
	padding: 10px 0;
`;

export default styled.div`
	color: #eee;
		width: 100%;
	display: grid;
	grid-auto-rows: 1fr min-content;
	grid-auto-flow: row;
	gap: 12px;
	justify-self: center;

	background-color: #232323;
	border-radius: 18px;
	padding: 24px 24px;
	box-shadow: 0 0 24px 0 rgba(0 0 0 / 0.5); #00000050;
`;
