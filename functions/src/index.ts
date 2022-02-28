import * as functions from 'firebase-functions';

let blogServerServer: any;
exports.blogServer = functions.region('us-central1').https.onRequest(async (request, response) => {
	if (!blogServerServer) {
		functions.logger.info('Initialising SvelteKit SSR entry');
		blogServerServer = require('./blogServer/index').default;
		functions.logger.info('SvelteKit SSR entry initialised!');
	}
	functions.logger.info('Requested resource: ' + request.originalUrl);
	return blogServerServer(request, response);
});
