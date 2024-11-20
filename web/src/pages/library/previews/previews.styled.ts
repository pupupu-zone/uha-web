import styled from 'styled-components';

export const IconContent = styled.h3`
	color: rgba(0, 0, 0, 0.8);
	font-size: 72px;
	font-weight: 600;
	line-height: 1;
	text-align: center;
	padding: 12px;
	border-radius: 8px;
	width: 96px;
	height: 96px;
`;

export const IconRoot = styled.div`
	position: absolute;
	inset: 0;
	border-radius: 12px;
	display: flex;
	align-items: end;
	justify-content: end;
	padding: 12px;

	&::after {
		content: '';
		display: block;
	}
`;

export const Title = styled.h3`
	position: relative;
	margin: 0;
	color: var(--light-text);
	font-weight: 600;
	font-size: 24px;
	color: #fafafa;
	text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
	overflow-wrap: break-word;
	word-wrap: break-word;
	hyphens: auto;
	margin-right: 72px;
	z-index: 2; /* Ensure title is above the gradient */
`;

export default styled.div`
	position: relative;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 24px;
	border-radius: 20px;
	background-image: linear-gradient(120deg, ${(props) => props.$color}, rgba(255, 255, 255, 0.1));
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	transition: all 150ms ease;
	overflow: hidden;

	/* Add dark gradient overlay */
	&::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 100%; /* Adjust this value to control gradient height */
		background: linear-gradient(120deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
		pointer-events: none;
		z-index: 1;
	}

	&:active {
		box-shadow: 0 4px 12px rgba(0 0 0 / 0.15);
		transform: translateY(4px);
	}

	aspect-ratio: 16/9;
`;
