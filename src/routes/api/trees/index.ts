import type { Tree } from '$lib/types/database/models';
import { requiredKeysTreeValidate } from '$lib/utilities/database';

import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async ({ request }) => {
	try {
		const tree = <Tree>await request.json();

		requiredKeysTreeValidate(tree);

		return {
			status: 302,
			headers: {
				'Content-Type': 'application/json',
			},
			body: '{ "message": "ok" }',
		};
	} catch (err) {
		console.log((<Error>err).name, (<Error>err).message);
		return {
			status: 404,
			headers: {
				'Content-Type': 'application/json',
			},
			body: `{ "Error": "${(<Error>err).message}" }`,
		};
	}
};
