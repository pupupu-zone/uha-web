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

export const Navigation = styled.div`
	position: fixed;
	bottom: 24px;
	right: 24px;
	display: grid;
	gap: 24px;
	grid-auto-flow: row;
	font-weight: 900;
	font-size: 24px;
`;
export const Profile = styled.div`
	width: 60px;
	padding: 12px;
	height: 60px;
	color: #eee;
	background-color: #333;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
`;
export const Library = styled.div`
	width: 60px;
	padding: 12px;
	height: 60px;
	color: #eee;
	background-color: #333;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
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

export default styled.div`
	display: grid;
	grid-auto-rows: 1fr min-content;
	grid-auto-flow: row;
	gap: 12px;

	width: 100vw;
	background-color: #222;
	border-bottom-right-radius: 36px;
	border-bottom-left-radius: 36px;
	padding: 24px 36px;
	padding-top: calc(24px + env(safe-area-inset-top));
	box-shadow: 0 0 24px 0 rgba(0 0 0 / 0.5); #00000050;
`;
