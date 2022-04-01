import type { GetSession } from '@sveltejs/kit';
import * as cookie from 'cookie';

export const getSession: GetSession = ({ request }) => {
    const cookies = cookie.parse(request.headers.get('cookie') ?? '');

    return {
        opts: cookies.opts,
    }
};