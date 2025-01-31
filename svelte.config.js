import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.GITHUB ? '/Currency_Converting' : ''
		},
		prerender: {
			entries: ['*']  // Ensures all pages are pre-rendered for static hosting
		}
	}
};

export default config;
