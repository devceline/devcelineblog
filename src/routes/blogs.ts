import { getBlogs, type BlogData } from '$lib/utils/blogData';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	const blogData = await getBlogs();
	const blogs = blogData;

	if (blogs) {
		return {
			body: { blogs, length: blogs }
		};
	}
}
