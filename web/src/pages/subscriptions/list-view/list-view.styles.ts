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
	width: 64px;
	height: 64px;
	clip-path: url('#squircle');
`;

export const StubBlock = styled.div`
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: min-content 1fr min-content;
	align-items: center;
	gap: 12px;

	width: 100%;
	border-radius: 18px;
	padding: 12px;
	width: calc(100% + 24px);
	margin-left: -12px;
	margin-right: -12px;

	&:hover {
		background-color: var(--card-hover);
	}
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 12px;
	padding: 12px 24px 48px;
`;
