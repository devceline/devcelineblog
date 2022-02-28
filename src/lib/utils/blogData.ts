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
	return new Promise((resolve, reject) => {
		adminDb
			.ref('blogs')
			.orderByChild('id')
			.equalTo(id)
			.get()
			.then((blog) => {
				const val = blog.val();
				if (val) {
					resolve(Object.values(val)[0]);
				} else {
					reject();
				}
			});
	});
};
