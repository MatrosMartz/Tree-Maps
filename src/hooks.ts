import type { SessionInterface } from '$lib/types';
import type { GetSession } from '@sveltejs/kit';

import * as cookie from 'cookie';

export const getSession: GetSession = ({ request }) => {
	const cookies = <SessionInterface>cookie.parse(request.headers.get('cookie') ?? '');

	return <SessionInterface>{
		prfs: cookies?.prfs,
	};
};
