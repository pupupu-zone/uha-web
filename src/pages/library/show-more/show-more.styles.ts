import styled from 'styled-components';

export const Circle = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	min-width: 64px;
	height: 64px;
	min-height: 64px;
	color: var(--primary-text);
	background-color: var(--settings-bg);
	border-radius: 50%;
	box-shadow: 0 1px 4px rgba(0 0 0 / 0.1);
	opacity: 0.9;
	transition: transform 150ms ease-in;

	&:active {
		transform: scale(0.97);
	}
`;

export default styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
