import type { GetSession } from '@sveltejs/kit';

import * as cookie from 'cookie';

export const getSession: GetSession = ({ request }) => {
	const cookies = <App.Session>cookie.parse(request.headers.get('cookie') ?? 'a');
	console.log(cookies);
	return {
		prfs: cookies?.prfs,
	};
};
