import styled from 'styled-components';

export const Content = styled.div`
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 40px;
	border-radius: 12px;
	width: 100%;

	& > form {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		max-width: 300px;
	}
`;

export default styled.div<{ $gradients: string[] }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-width: 100vw;
	min-height: 100vh;
	position: relative;

	z-index: 1;

	&::before {
		position: absolute;
		content: '';
		inset: 0;
		background: repeating-conic-gradient(
				from 0deg at 80% 50%,
				${(props) => props.$gradients[0] || '#5691f5'}80 0% 8.25%,
				${(props) => props.$gradients[1] || '#b338ff'}80 8.25% 16.5%,
				${(props) => props.$gradients[1] || '#f83058'}80 16.5% 25%
			),
			repeating-conic-gradient(
				from 15deg at 50% 50%,
				${(props) => props.$gradients[2] || '#e856f5'}80 0% 8.25%,
				${(props) => props.$gradients[3] || '#ff384c'}80 8.25% 16.5%,
				${(props) => props.$gradients[4] || '#e7f830'}80 16.5% 25%
			),
			repeating-conic-gradient(from 0deg at 20% 50%, #f58356ff 0% 8.25%, #caff38ff 8.25% 16.5%, #30f88aff 16.5% 25%);

		filter: blur(2px) brightness(0.85);
	}
`;
