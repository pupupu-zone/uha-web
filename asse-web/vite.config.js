import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';

import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';
import templateLiteralPlugin from './vite-plugin-minify-template-literals/index.cjs';

import { dependencies } from './package.json';

const buildTime = new Date().toLocaleDateString('ru-RU', {
	timeZoneName: 'short',
	hour: '2-digit',
	minute: '2-digit'
});

const globalVendorPackages = [
	'react',
	'react-dom',
	'react-router',
	'react-router-dom',
	'styled-components',
	'typescript'
];

function renderChunks(deps) {
	let chunks = {};
	Object.keys(deps).forEach((key) => {
		if (globalVendorPackages.includes(key)) return;
		chunks[key] = [key];
	});
	return chunks;
}

const proxyConfig = {
	'/api': {
		target: process.env.VITE_REACT_APP_API_URL,
		changeOrigin: true,
		// withCredentials: false,
		rewrite: (path) => path.replace(/^\/api/, '')
	}
};

const config = ({ mode }) => {
	process.env = {
		...process.env,
		...loadEnv(mode, process.cwd()),
		VITE_BUILD_TIME: buildTime
	};

	return defineConfig({
		build: {
			minify: 'terser',
			sourcemap: false,
			rollupOptions: {
				output: {
					manualChunks: {
						vendor: globalVendorPackages,
						...renderChunks(dependencies)
					}
				}
			}
		},
		plugins: [svgr(), react(), templateLiteralPlugin()],
		resolve: {
			alias: {
				'@src': fileURLToPath(new URL('./src', import.meta.url)),
				'@api': fileURLToPath(new URL('./src/core/api', import.meta.url)),
				'@store': fileURLToPath(new URL('./src/core/store', import.meta.url)),
				'@core': fileURLToPath(new URL('./src/core', import.meta.url)),
				'@routes': fileURLToPath(new URL('./src/core/routes', import.meta.url)),
				'@ui': fileURLToPath(new URL('./src/ui', import.meta.url)),
				'@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
				'@hooks': fileURLToPath(new URL('./src/utils/hooks', import.meta.url)),
				'@icons': fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
				'@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
				'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
				'@fonts': fileURLToPath(new URL('./src/assets/fonts', import.meta.url)),
				'@yup': fileURLToPath(new URL('./src/utils/yup', import.meta.url)),
				'@validations': fileURLToPath(new URL('./src/utils/validations', import.meta.url)),
				'@features': fileURLToPath(new URL('./src/features', import.meta.url)),
				'@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
				'@navbar': fileURLToPath(new URL('./src/features/navbar', import.meta.url))
			}
		},
		server: {
			port: 4200,
			open: true,
			proxy: proxyConfig
		},
		preview: {
			port: 4230,
			proxy: proxyConfig
		}
	});
};

export default config;
