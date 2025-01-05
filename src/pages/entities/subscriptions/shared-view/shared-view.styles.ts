import styled from 'styled-components';

export const ColorPreview = styled.div<{ $color: string }>`
	position: fixed;
	inset: 0;
	background-color: ${(props) => props.$color};
`;

export const Main = styled.main`
	display: grid;
	grid-auto-flow: row;
	gap: 36px;
`;

export default styled.form`
	position: relative;
	z-index: 1;
	display: grid;
	grid-auto-rows: min-content min-content min-content 1fr;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
	gap: 24px;
	align-items: end;
	min-height: 100%;
`;
