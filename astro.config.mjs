// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: '_blank',
					rel: ['noopener', 'noreferrer'],
				},
			],
		],
	},
	vite: {
		plugins: [tailwindcss()],
		server: {
			headers: {
				'Cross-Origin-Embedder-Policy': 'unsafe-none',
				'Cross-Origin-Resource-Policy': 'cross-origin',
			},
		},
	},
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: 'Roboto',
				cssVariable: '--font-roboto',
			},
		],
	},
	devToolbar: {
		enabled: false,
	},
	site: 'https://labias.ar/',
});
