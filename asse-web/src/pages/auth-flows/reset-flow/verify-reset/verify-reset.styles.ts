import styled from 'styled-components';
import { PageForm, Actions } from '@pages/auth-flows/common.styles';

export { PageForm, Actions };

export const Loader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 36px;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export default styled.div`
	display: grid;
	grid-auto-rows: min-content 1fr;
	grid-auto-columns: 1fr;
	grid-auto-flow: row;
	margin: 60px;
`;
