import { db as adminDb } from './firebaseAdmin';

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

export const getBlog = (id: string) => {
	return new Promise((resolve) => {
		adminDb
			.ref('blogs')
			.orderByChild('id')
			.equalTo(id)
			.get()
			.then((blog) => {
				resolve(blog.val());
			});
	});
};
