import styled from 'styled-components';

export const PageForm = styled.form`
	display: grid;
	grid-auto-rows: max-content;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
	gap: 24px;
	width: 100%;
`;

export const Actions = styled.div`
	display: grid;
	grid-auto-rows: max-content;
	grid-auto-columns: 1fr 1fr;
	grid-auto-flow: column;
	gap: 24px;

	@media (width <= 768px) {
		grid-auto-rows: max-content;
		grid-auto-columns: 1fr;
		grid-auto-flow: row;
		gap: 12px;
	}
`;

export const PageRoot = styled.div`
	display: grid;
	grid-auto-rows: max-content;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
	gap: 36px;
	margin: 60px;
`;
