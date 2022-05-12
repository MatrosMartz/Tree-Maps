import type { RequestHandler } from '@sveltejs/kit';

import type { Specie } from '$lib/types/database/models';

import { getCollection } from '$lib/database/conection';
import { StateValidable } from '$lib/types/database/enums';

export const get: RequestHandler = async () => {
	try {
		const collection = await getCollection('species');

		const species: Specie[] = <Specie[]>await collection.find().toArray();

		const data = species.map(specie => {
			if (specie.state === StateValidable.VL)
				return {
					_id: specie._id,
					cientificName: specie.cientificName,
					name: specie.name,
					conservation: specie.conservation,
					distribution: specie.distribution,
					gener: specie.gener,
					description: specie.description,
				};
			else return;
		});
		return {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		};
	} catch (err) {
		if (err.name !== 'TypeError') console.log(err);
		return {
			status: 404,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(err),
		};
	}
};
