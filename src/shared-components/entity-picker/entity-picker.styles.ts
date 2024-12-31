import styled from 'styled-components';
import { Input as AriaInput } from 'react-aria-components';

export const Input = styled(AriaInput)``;

export const Entities = styled.div`
	display: flex;
	flex-direction: row;
	white-space: nowrap;
	gap: 18px;
	width: 100%;
	overflow: scroll;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 18px;
`;
