import styled from 'styled-components';

export const IconRoot = styled.div`
	width: 48px;
	height: 48px;
	border-radius: 12px;
	background-color: rgba(255, 255, 255, 0.2);
	display: flex;
	align-items: center;
	justify-content: center;
	backdrop-filter: blur(4px);
`;

export const LetterFallback = styled.span`
	color: rgba(0, 0, 0, 0.8);
	font-size: 24px;
	font-weight: 600;
	line-height: 1;
`;

export const Title = styled.h3`
	color: var(--light-text);
	font-size: 18px;
	font-weight: 600;
	margin: 0;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
	overflow-wrap: break-word;
	word-wrap: break-word;
	hyphens: auto;
	max-width: 100%;
`;

export default styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	min-height: 140px;
	padding: 16px;
	border-radius: 20px;
	background-color: ${(props) => props.$color};
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: all 0.2s ease;
	position: relative;
	overflow: hidden;
	height: 160px;

	/* Top light overlay */
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 60%;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
		pointer-events: none;
	}

	/* Bottom dark stripe with blur */
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		pointer-events: none;
	}

	&:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	aspect-ratio: 1;

	/* Ensure content stays above the overlays */
	> * {
		position: relative;
		z-index: 1;
	}
`;
