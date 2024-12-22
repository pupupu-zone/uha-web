import styled from 'styled-components';

export const Information = styled.div`
	display: grid;
	grid-auto-rows: 1fr 1fr;
	grid-auto-flow: row;
	align-items: end;
	overflow: hidden;
	white-space: nowrap;
`;

export const LogoWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

export default styled.div`
	display: grid;
	grid-auto-columns: min-content 1fr min-content;
	grid-auto-flow: column;
	gap: 16px;
	align-items: center;
	width: calc(100% + 24px);
	margin-right: -12px;
	margin-left: -12px;
	padding: 12px 16px;
	border-radius: 18px;

	&:hover {
		background-color: var(--card-hover);
	}
`;
