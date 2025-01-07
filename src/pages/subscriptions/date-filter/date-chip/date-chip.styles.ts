import styled from 'styled-components';
import { H3 } from '@ui';

export const Caption = styled(H3)`
	color: var(--primary-text);
	font-variant: all-small-caps;
	text-align: left;
	opacity: 0.8;
`;

export const Input = styled.input`
	position: absolute;
	width: 1px;
	margin: 0;
	padding: 0;
	opacity: 0;
`;

export default styled.div`
	position: relative;
	display: flex;
	gap: 6px;
	align-items: center;
	width: fit-content;
	margin: 0;
	padding: 6px 12px;
	background-color: rgba(0 0 0 / 0.1);
	border: none;
	border-radius: 6px;
`;
