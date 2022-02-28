import firebaseAdmin, { type AppOptions } from 'firebase-admin';

const serviceAccountJson = {
	...JSON.parse(import.meta.env.VITE_SERVICE_ACCOUNT_JSON)
};

const formattedServiceAccount = {
	clientEmail: serviceAccountJson.client_email,
	privateKey: serviceAccountJson.private_key,
	projectId: serviceAccountJson.project_id
};

const credentials = firebaseAdmin.credential.cert(formattedServiceAccount);

const firebaseConfig: AppOptions = {
	projectId: import.meta.env.VITE_PROJECTID,
	storageBucket: import.meta.env.VITE_STORAGEBUCKET,
	credential: credentials,
	serviceAccountId: formattedServiceAccount.clientEmail,
	databaseURL: import.meta.env.VITE_DATABASE_URL
};

const app = firebaseAdmin.initializeApp({
	...firebaseConfig
});

export const db = app.database();

export default app;
