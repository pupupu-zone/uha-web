import styled from 'styled-components';
import { Link } from '@tanstack/react-router';

export const NavButton = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	color: var(--primary-text);
	border-radius: 50%;
`;

export const AddButton = styled(Link)`
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
	background-color: var(--input-bg);
	border-radius: 18px;
	box-shadow: 0 0 10px 1px rgba(0 0 0 / 0.15);
`;
