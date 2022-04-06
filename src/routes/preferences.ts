import type { RequestHandler } from '@sveltejs/kit';

import * as cookie from 'cookie';

export const put: RequestHandler = async ({ request }) => {
	const prfs = await request.json();
	const headers = {
		'set-cookie': cookie.serialize('prfs', JSON.stringify(prfs), {
			httpOnly: true,
			sameSite: 'lax',
			maxAge: 60 * 60 * 24 * 7,
			path: '/',
		}),
	};

	return {
		status: 200,
		headers,
		body: {
			prfs,
		},
	};
};
