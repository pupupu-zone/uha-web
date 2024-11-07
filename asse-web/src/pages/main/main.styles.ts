import styled from 'styled-components';

export const Links = styled.div`
	display: grid;
	grid-auto-rows: min-content;
	grid-auto-columns: min-content;
	grid-auto-flow: column;
	gap: 24px;
	width: 100%;
	padding: 12px;
`;

export default styled.div`
	display: grid;
	grid-auto-rows: 1fr min-content;
	grid-auto-flow: row;
	gap: 20px;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;
