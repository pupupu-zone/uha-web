import styled from 'styled-components';

export const IconWrap = styled.div`
	width: 100%;
	height: 100%;

	& > img {
		width: inherit;
		height: inherit;
		transform: scale(1.01);
	}
`;

export default styled.div<{ $color: string }>`
	position: relative;
	height: 96px;
	overflow: hidden;
	background-color: ${(props) => props.$color};
	border-radius: 20px;
	box-shadow: 0 2px 4px rgba(0 0 0 / 0.1);
	transition: all 150ms ease;

	&:active {
		box-shadow: 0 4px 12px rgba(0 0 0 / 0.15);
		transform: translateY(4px);
	}

	clip-path: url('#squircle');
	aspect-ratio: 1;
	user-select: none;
`;
