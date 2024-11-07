import { createGlobalStyle } from 'styled-components';

const General = createGlobalStyle`
	:root {
		--white: 99% 0 0deg;
		--blue-focus: 60% 0.2 257deg;
	}

	html {
		height: 100%;
		min-height: 100%;
		background-color: oklch(var(--white));
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
		-webkit-box-shadow: 0 0 0 30px oklch(var(--white)) inset !important;
	}
`;

export default General;
