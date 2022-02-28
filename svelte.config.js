import firebase from 'svelte-adapter-firebase';
import adapter from '@sveltejs/adapter-auto';

import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			includePaths: ['./src/styles/']
		}
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;
