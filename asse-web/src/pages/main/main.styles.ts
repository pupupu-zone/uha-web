import styled from 'styled-components';

export const Links = styled.div`
	display: grid;
	padding: 12px;
	width: 100%;
	grid-auto-flow: column;
	gap: 24px;
	grid-auto-columns: min-content;
	grid-auto-rows: min-content;
	white-space: nowrap;
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
