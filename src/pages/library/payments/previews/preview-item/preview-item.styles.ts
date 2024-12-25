import styled from 'styled-components';

export const IconContent = styled.span`
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

export const Title = styled.h3<{ $isTextDark: boolean }>`
	max-width: 128px;
	overflow: hidden;
	color: ${({ $isTextDark }) => ($isTextDark ? 'var(--primary-color)' : 'white')};
	font-size: 18px;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const Head = styled.div`
	display: flex;
	gap: 18px;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
`;

export const Body = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	width: 100%;
	opacity: 0.8;
`;

export default styled.div<{ $color: string }>`
	display: grid;
	grid-auto-rows: min-content 1fr;
	grid-auto-flow: row;
	gap: 18px;
	padding: 18px 18px 0;
	background-color: ${({ $color }) => `${$color}50`}; /* 50% opacity */
	border-radius: 12px;
	box-shadow: 0 2px 4px rgba(0 0 0 / 0.1);
	user-select: none;
	aspect-ratio: 1.586 / 1;
`;
