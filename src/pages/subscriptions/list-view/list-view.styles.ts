import styled from 'styled-components';
import { H3 } from '@ui';

export const DateTitle = styled(H3)``;

export const DateSlice = styled.div`
	& > ${DateTitle} {
		margin-bottom: 4px;
	}
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 24px;
	padding: 0 0 48px;
`;
