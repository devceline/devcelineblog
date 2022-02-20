import { db as adminDb } from './firebaseAdmin';

export interface BlogData {
	title: string;
	summary: string;
	markdownContent: string;
}

export const getBlogs = () => {
	return new Promise((resolve) => {
		const blogs = [];
		adminDb
			.ref('blogs')
			.get()
			.then((v) => {
				v.forEach((blog) => {
					blogs.push(blog.val());
				});
				resolve(blogs);
			})
			.catch(console.log);
	});
};
