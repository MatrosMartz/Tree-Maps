import type { RequestHandler } from '@sveltejs/kit';

import { getManySpecies } from '$lib/database/species';

export const get: RequestHandler = async () => {
	try {
		const species = await getManySpecies();

		return {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(species),
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
