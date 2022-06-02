import type { RequestHandler } from '@sveltejs/kit';

import { getOneSpecies } from '$lib/database/species';

export const get: RequestHandler = async ({ params: { id } }) => {
	if (!/^[A-z-]+$/.test(id))
		return {
			status: 400,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ error: 'Not Correct id or cientific name for Specie' }),
		};
	try {
		const specie = await getOneSpecies({ scientificName: id });
		return {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(specie),
		};
	} catch (err) {
		if (err.name !== 'TypeError') console.error(err.name);
		return {
			status: 404,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ error: `Not Found "${id}" Specie` }),
		};
	}
};
