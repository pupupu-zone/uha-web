import styled from 'styled-components';

export const Information = styled.div`
	display: grid;
	grid-auto-rows: 1fr 1fr;
	grid-auto-flow: row;
	align-items: end;
	overflow: hidden;
	white-space: nowrap;
`;

export const SupportImage = styled.div`
	width: 48px;
	height: 48px;
	clip-path: url('#squircle');
`;

export default styled.div`
	display: grid;
	grid-auto-columns: min-content 1fr min-content;
	grid-auto-flow: column;
	gap: 12px;
	align-items: center;
	width: calc(100% + 40px);
	margin-right: -20px;
	margin-left: -20px;
	padding: 12px 16px;
	border-radius: 18px;

	&:hover {
		background-color: var(--card-hover);
	}
`;
