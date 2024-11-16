import styled from 'styled-components';
import { H2 } from '@ui';

export const Header = styled(H2)`
	margin-bottom: 12px;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	grid-template-columns: 1fr;
	padding: 12px 16px;
	background-color: var(--input-bg);
	border-radius: 14px;
`;
