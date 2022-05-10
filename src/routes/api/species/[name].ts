import type { RequestHandler } from '@sveltejs/kit';

import { getCollection } from '$lib/utilities/db';

export const get: RequestHandler = async ({ params }) => {
	const cientificName = params.name.replace('-', ' ');
	try {
		const collection = await getCollection('species');

		const specie = await collection.findOne({ cientificName });

		const data = {
			_id: specie._id,
			cientificName: specie.cientificName,
			name: specie.name,
			conservation: specie.conservation,
			distribution: specie.distribution,
			gener: specie.gener,
			description: specie.description,
		};

		return {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};
	} catch (err) {
		if (err.name !== 'TypeError') console.error(err.name);
		return {
			status: 404,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ error: `Not Found "${cientificName}"` }),
		};
	}
};
