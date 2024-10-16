import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoot from '@core/Root';

async function render() {
	const container = document.getElementById('root') as HTMLElement;
	const root = createRoot(container);

	root.render(
		<React.StrictMode>
			<AppRoot />
		</React.StrictMode>
	);
}

render();
