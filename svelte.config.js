import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsx } from './mdsx.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	extensions: [".svelte", ".md"],
	preprocess: [mdsx, vitePreprocess()],
	kit: {
		adapter: adapter(),
		alias: {
			"$content-collections": "./.content-collections/generated"
		}
	}

};

export default config;
