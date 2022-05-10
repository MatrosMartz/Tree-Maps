import type { RequestHandler } from '@sveltejs/kit';

import { getCollection } from '$lib/utilities/db';

export const get: RequestHandler = async () => {
	try {
		const collection = await getCollection('species');

		const species = await collection.find().toArray();

		const data = species.map(specie => {
			return {
				_id: specie._id,
				cientificName: specie.cientificName,
				name: specie.name,
				conservation: specie.conservation,
				distribution: specie.distribution,
				gener: specie.gener,
				description: specie.description,
			};
		});

		return {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};
	} catch (err) {
		console.log(err);
		return {
			status: 404,
			body: JSON.stringify(err),
		};
	}
};
