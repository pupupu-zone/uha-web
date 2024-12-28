import styled from 'styled-components';

export const Main = styled.main`
	display: grid;
	grid-auto-flow: row;
	gap: 36px;
`;

export default styled.div<{ $color: string }>`
	display: grid;
	grid-auto-flow: row;
	gap: 24px;
`;
