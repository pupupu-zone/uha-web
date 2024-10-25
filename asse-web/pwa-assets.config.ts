import { defineConfig, minimal2023Preset as preset } from '@vite-pwa/assets-generator/config';

const config = defineConfig({
	headLinkOptions: {
		preset: '2023'
	},
	preset,
	images: ['public/favicon.png']
});

export default config;
