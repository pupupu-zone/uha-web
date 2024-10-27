import { fileURLToPath } from 'url';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig, loadEnv } from 'vite';

import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import templateLiteralPlugin from './vite-plugin-minify-template-literals/index.cjs';

import { dependencies } from './package.json';
import manifest from './public/manifest.json';

const buildTime = new Date().toLocaleDateString('ru-RU', {
	timeZoneName: 'short',
	hour: '2-digit',
	minute: '2-digit'
});

const globalVendorPackages = ['react', 'react-dom', '@tanstack/react-router', 'styled-components', 'typescript'];

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
				external: ['chokidar'],
				output: {
					manualChunks: {
						vendor: globalVendorPackages,
						...renderChunks(dependencies)
					}
				}
			}
		},
		plugins: [
			TanStackRouterVite({
				routesDirectory: './src/core/routes',
				quoteStyle: 'single',
				enableRouteGeneration: true,
				autoCodeSplitting: false
			}),
			svgr(),
			react(),
			VitePWA({
				strategies: 'injectManifest',
				srcDir: 'src',
				filename: 'sw.ts',
				registerType: 'autoUpdate',
				injectRegister: false,
				injectManifest: {
					globPatterns: ['**/*.{js,css,html,svg,png,ico,ttf,woff,woff2}']
				},
				pwaAssets: {
					disabled: false,
					config: true
				},
				devOptions: {
					enabled: process.env.NODE_ENV === 'development',
					navigateFallback: 'index.html',
					suppressWarnings: false,
					type: 'module'
				},
				manifest
			}),
			templateLiteralPlugin()
		],
		resolve: {
			alias: {
				'@src': fileURLToPath(new URL('./src', import.meta.url)),
				'@api': fileURLToPath(new URL('./src/core/api', import.meta.url)),
				'@store': fileURLToPath(new URL('./src/core/store', import.meta.url)),
				'@core': fileURLToPath(new URL('./src/core', import.meta.url)),
				'@ui': fileURLToPath(new URL('./src/ui', import.meta.url)),
				'@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
				'@icons': fileURLToPath(new URL('./src/assets/icons', import.meta.url)),
				'@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
				'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
				'@fonts': fileURLToPath(new URL('./src/assets/fonts', import.meta.url)),
				'@features': fileURLToPath(new URL('./src/features', import.meta.url)),
				'@pages': fileURLToPath(new URL('./src/pages', import.meta.url))
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
