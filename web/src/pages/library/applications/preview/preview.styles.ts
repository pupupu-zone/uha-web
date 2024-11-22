import styled from 'styled-components';

export const Broken = styled.div<{ $color: string; $isTextDark: boolean }>`
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

export default styled.div<{ $color: string }>`
	display: flex;
	flex-direction: column;
	gap: 18px;
	align-items: center;
	justify-content: flex-start;
	text-align: center;
	border-radius: 8px;
	user-select: none;
	padding: 16px;
	min-width: 120px;
	width: min-content;
	background-color: ${({ $color }) => `${$color}40`};
`;
