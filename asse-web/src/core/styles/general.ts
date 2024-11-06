import { createGlobalStyle } from 'styled-components';

const General = createGlobalStyle`
	:root {
		--white: 99% 0 0deg;
		--blue-focus: 60% 0.2 257deg;
	}

	html {
		background-color: oklch(var(--white));
	}

	body {
		font-family: 'Nunito Sans', sans-serif;
	}

	#root {
		display: flex;
		flex-direction: column;
		width: 100vw;
		min-height: 100%;
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
`;

export default General;
