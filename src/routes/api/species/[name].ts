import type { RequestHandler } from '@sveltejs/kit';

import type { Specie } from '$lib/types/database/models';

import { getCollection } from '$lib/database/conection';
import { StateValidable } from '$lib/types/database/enums';

export const get: RequestHandler = async ({ params }) => {
	const cientificName = params.name.replace('-', ' ');
	try {
		const collection = await getCollection('species');

		const specie = <Specie>await collection.findOne({ cientificName });

		if (specie.state !== StateValidable.VL) {
			return {
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ error: `Not Validate "${cientificName}" Specie` }),
			};
		}

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
			body: JSON.stringify({ error: `Not Found "${cientificName}" Specie` }),
		};
	}
};
