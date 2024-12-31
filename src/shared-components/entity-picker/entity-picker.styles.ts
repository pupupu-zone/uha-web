import styled from 'styled-components';
import { Input as AriaInput } from 'react-aria-components';

export const Input = styled(AriaInput)``;

export const Entities = styled.div`
	white-space: nowrap;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	gap: 18px;
`;
