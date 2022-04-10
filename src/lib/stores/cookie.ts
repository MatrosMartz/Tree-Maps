import type { Cookies } from '../types/alert';

import { writable } from 'svelte/store';
import { browser } from '$app/env';

import { parseString, objectPorperties } from '../utilities';

import alert from './alert';

const localCookiesAccepted: Cookies | undefined = <Cookies>(
	objectPorperties(parseString(localStorage.getItem('cookies-accepted')), [
		['auth', 'boolean'],
		['prfs', 'boolean'],
	])
);

const areCookiesAccepted =
	(browser && localCookiesAccepted) ?? <Cookies>{ auth: false, prfs: false };

const cookiesAccepted = writable(areCookiesAccepted);

cookiesAccepted.subscribe(val => {
	if (browser) localStorage.setItem('cookies-accepted', JSON.stringify(val));
	if (val.auth || val.prfs) alert.set_cookies();
});

function set(val: Cookies) {
	if (typeof val.prfs === 'boolean' && typeof val.auth === 'boolean') cookiesAccepted.set(val);
	else console.error('val no contains "prfs" and "auth" properties >:C');
}

export default {
	subscribe: cookiesAccepted.subscribe,
	set,
};
