import styled from 'styled-components';

export const Background = styled.div`
	position: fixed;
	z-index: 999;
	inset: 0;
	background-color: rgba(0 0 0 / 0.5);
`;

export const AddIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	background-color: #efefef;
	border-radius: 50%;
	aspect-ratio: 1;
`;

export const AdderRoot = styled.a`
	display: grid;
	grid-auto-flow: row;
	gap: 18px;
	padding: 18px;
	color: inherit;
	background-color: var(--popup-bg);
	border-radius: 12px;
	box-shadow: 0 0 10px 0 rgba(0 0 0 / 0.05);
	transition: transform 100ms ease-in;
	user-select: none;
	touch-action: manipulation;
	will-change: transform, box-shadow;

	&:active,
	&:focus-visible {
		transform: scale(0.95);
	}
`;

export const ItemsWrap = styled.div`
	display: grid;
	grid-auto-rows: 1fr;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	gap: 18px;
`;

export default styled.div`
	position: fixed;
	right: calc(env(safe-area-inset-right) + 12px);
	bottom: calc(env(safe-area-inset-bottom) + 12px);
	left: calc(env(safe-area-inset-left) + 12px);
	z-index: 1000;
`;
