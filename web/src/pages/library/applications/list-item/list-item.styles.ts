import styled from 'styled-components';

export const LogoWrap = styled.div<{ $color: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 72px;
	max-width: 72px;
	height: 100%;
	background-color: ${(props) => `${props.$color}25`};
	backdrop-filter: blur(8px);
	aspect-ratio: 1;
`;

export const ImgLogo = styled.img`
	width: 48px;
	height: 48px;
	overflow: hidden;
	clip-path: url('#squircle');
	aspect-ratio: 1;
`;

export const EmojiLogo = styled.div`
	font-size: 32px;
`;

export const TextLogo = styled.p`
	font-size: 32px;
`;

export const Name = styled.div`
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	overflow-wrap: break-word;
`;

export const Category = styled.div`
	color: var(--secondary-text);
	font-size: 12px;
`;

export const Info = styled.div`
	display: grid;
	grid-auto-rows: min-content min-content;
	grid-auto-flow: row;
	gap: 12px;
	padding: 16px 16px 16px 0;
`;

export default styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	align-items: center;
	justify-content: flex-start;
	overflow: hidden;
	background-color: var(--settings-bg);
	border-radius: 8px;
	box-shadow: 0 0 0 1px rgba(0 0 0 / 0.05);
`;
