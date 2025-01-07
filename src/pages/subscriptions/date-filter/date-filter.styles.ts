import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	flex-wrap: wrap;
	gap: 18px;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 12px;
	width: calc(100vw - 48px);
	margin-top: 18px;
	margin-bottom: 36px;
	place-self: center;
`;
