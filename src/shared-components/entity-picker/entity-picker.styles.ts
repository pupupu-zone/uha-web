import styled from 'styled-components';
import { Button as AriaButton, Select as AriaSelect } from 'react-aria-components';

export const SelectWrapper = styled(AriaButton)`
	width: 100%;
	margin: 0;
	padding: 18px;
	background-color: transparent;
	border: 1px solid red;
	border-radius: 8px;
`;

export const Select = styled(AriaSelect)`
	width: 100%;
`;

export default styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
