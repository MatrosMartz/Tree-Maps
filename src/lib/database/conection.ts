import { MongoClient } from 'mongodb';

import { config } from 'dotenv';

config();

const password = process.env.MONGO_PASSWORD;

const url = `mongodb+srv://dbUser:${password}@tree-maps.thfnd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(url);

export default async () => {
	await client.connect();

	return client.db('db-name');
};
