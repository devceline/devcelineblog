import adapter from 'svelte-adapter-firebase';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    scss: {
      includePaths: ['./src/styles/']
    },
 }),

	kit: {
    adapter: adapter({
      target: 'blogBuilder'
    })
	}
};

export default config;
