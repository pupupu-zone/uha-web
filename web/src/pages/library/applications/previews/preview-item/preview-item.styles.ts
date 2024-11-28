import styled from 'styled-components';

import type { ColorStyled, TextStyled } from './preview-item.d';

export const Broken = styled.div<ColorStyled & TextStyled>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: inherit;
	height: inherit;
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-color)' : 'white')};
	font-weight: 500;
	font-size: 24px;
	background-color: ${({ $color }) => `${$color}80`};
`;

export const IconContent = styled.img`
	width: inherit;
	height: inherit;
`;

export const IconWrap = styled.div`
	width: 48px;
	height: 48px;
	overflow: hidden;
	clip-path: url('#squircle');
	aspect-ratio: 1;
`;

export default styled.div<ColorStyled>`
	display: flex;
	flex-direction: column;
	gap: 18px;
	align-items: center;
	justify-content: flex-start;
	width: min-content;
	min-width: 120px;
	padding: 16px;
	text-align: center;
	background: linear-gradient(to right, ${({ $color }) => `${$color}40`} 0%, ${({ $color }) => `${$color}40`} 100%);
	background-color: #fff;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0 0 0 / 0.1);
	user-select: none;
`;
