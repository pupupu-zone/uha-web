import styled from 'styled-components';
import type { ColorStyled, TextStyled } from './preview-item.d';

export const IconContent = styled.span<ColorStyled>`
	font-size: 28px;
`;

export const IconRoot = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	padding: 8px;
	background-color: rgba(255 255 255 / 0.25);
	border-radius: 8px;
	backdrop-filter: blur(8px);
`;

export const Title = styled.h3<TextStyled>`
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-color)' : 'white')};
	font-size: 18px;
	white-space: nowrap;
`;

export default styled.div<ColorStyled>`
	display: flex;
	flex-direction: row;
	gap: 18px;
	align-items: center;
	padding: 18px 36px 18px 18px;
	background-color: ${({ $color }) => `${$color}50`}; /* 50% opacity */
	border-radius: 12px;
	box-shadow: 0 2px 4px rgba(0 0 0 / 0.1);
	user-select: none;
`;
