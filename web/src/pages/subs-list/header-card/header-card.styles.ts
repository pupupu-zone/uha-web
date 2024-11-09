import styled from 'styled-components';

export const Title = styled.h1`
	font-weight: 700;
	font-size: 24px;
	color: #eee;
`;

export const Navigation = styled.div`
	display: grid;
	gap: 24px;
	grid-auto-flow: row;
	font-weight: 900;
	font-size: 24px;
`;
export const Profile = styled.div`
	width: 48px;
	height: 48px;
	color: #333;
	background-color: #eee;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Library = styled.div`
	width: 48px;
	height: 48px;
	color: #333;
	background-color: #eee;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Costs = styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 8px;
	color: #eee;
`;

export const Digits = styled.h1`
	font-size: 50px;
	font-weight: 900;
	margin: 0;
`;

export const Left = styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-auto-rows: 1fr min-content;
`;

export const Right = styled.div`
	display: grid;
	grid-auto-flow: row;
	align-items: start;
	justify-content: end;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: column;
	gap: 12px;
	grid-auto-columns: 1fr min-content;

	width: 100vw;
	min-height: 150px;
	max-height: 200px;
	height: calc(100dvh / 3);
	background-color: #222;
	border-bottom-right-radius: 36px;
	border-bottom-left-radius: 36px;
	padding: 24px 36px;
	box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.5);
`;
