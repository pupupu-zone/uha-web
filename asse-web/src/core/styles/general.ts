import { createGlobalStyle } from 'styled-components';

const General = createGlobalStyle`
	:root {
		--blue-focus: 60% 0.2 257deg;
		--bg-color: #EDE8E1;
		--input-bg: #f2effb;
		--error: #D9534F;
		--label: #4A4A4A;
		--border: #A69CAC;
		--primary-text: #333;
	}

	html {
		height: 100%;
		min-height: 100%;
		background-color: var(--bg-color);
	}

	body {
		min-height: 100%;
		font-family: 'Nunito Sans', sans-serif;
	}

	#root {
		display: grid;
		grid-template-rows: 1fr;
		min-width: 100vw;
		min-height: 100vh;
		min-height: 100dvh;
		margin: 0 auto;
	}

	label {
		cursor: pointer;
	}

	input {
		padding: 0.5rem 1rem;
		font-size: 1rem;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	button, input, textarea, a {
		outline: none;

		&:focus-visible {
			box-shadow: 0 0 0 3px oklch(var(--blue-focus) / 0.5);
		}
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-box-shadow: 0 0 0 60px var(--bg-color) inset !important;
	}
`;

export default General;
