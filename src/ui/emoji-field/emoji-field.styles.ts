import styled from 'styled-components';

export const PickerWrap = styled.div`
	& em-emoji-picker {
		width: 100%;

		--border-radius: 0 0 8px 8px;
		--shadow: none;
	}
`;

export const Emoji = styled.p`
	position: absolute;
	top: 50%;
	right: 12px;
	font-size: 24px;
	transform: translateY(-50%);
`;

export const Label = styled.label`
	position: relative;
	padding: 12px;
	color: #333;
	font-weight: 500;
	font-size: 16px;
	line-height: 1;
	background-color: var(--input-border);
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
`;

export default styled.div`
	display: grid;
	grid-auto-flow: row;
	background-color: var(--input-bg);
	border: 1px solid transparent;
	border-color: var(--input-border);
	border-radius: 8px;
`;
