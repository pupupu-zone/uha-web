import styled from 'styled-components';

export const NavButton = styled.p<{ $isDisabled?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	color: var(--primary-text);
	border-radius: 50%;
	opacity: ${({ $isDisabled }) => ($isDisabled ? 0.3 : 1)};
`;

export const AddButton = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	color: var(--primary-button-text);
	background-color: var(--primary-text);
	border-radius: 50%;
`;

export default styled.div`
	position: fixed;
	right: calc(env(safe-area-inset-right) + 12px);
	bottom: calc(env(safe-area-inset-bottom) + 24px);
	left: calc(env(safe-area-inset-left) + 12px);
	z-index: 100;
	display: grid;
	grid-auto-flow: column;
	align-items: center;
	justify-content: space-around;
	padding: 12px;
	background-color: rgba(251 251 251 / 0.7);
	transform: translateY(0%);
	backdrop-filter: blur(8px);
	border-radius: 18px;
	border-top: 1px solid #e5e7eb;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
