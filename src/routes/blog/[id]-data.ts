import { getBlog } from '$lib/utils/blogData';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	const blog = await getBlog(params.id);

	if (blog) {
		return {
			body: { blog }
		};
	}
}
