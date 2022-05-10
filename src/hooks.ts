import type { GetSession, Handle } from '@sveltejs/kit';

import { parse as cookieParse } from 'cookie';

// import { isAuthenticated, isProtectedRoute } from '$lib/utilities/hooks';

export const getSession: GetSession = ({ request }) => {
	const cookies = <App.Session>cookieParse(request.headers.get('cookie') ?? 'a');
	return {
		prfs: cookies?.prfs,
	};
};

/* export const handle: Handle = async ({ event, resolve }) => {
	if (
		isProtectedRoute(event.url.pathname) &&
		!isAuthenticated(event.request.headers.get('Cookie'))
	) {
		return new Response('', {
			status: 301,
			headers: {
				Location: '/',
			},
		});
	}

	const response = await resolve(event);

	return response;
};
 */
