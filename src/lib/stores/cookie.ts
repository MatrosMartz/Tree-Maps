import type { Cookies } from '../types/alert';

import { writable } from 'svelte/store';
import { browser } from '$app/env';

import { parseString, objectPorperties } from '../utilities';

const anteLocal = browser ? localStorage.getItem('cookies-accepted') : '';

const areCookiesAccepted: Cookies | undefined = <Cookies>objectPorperties(parseString(anteLocal), [
	['auth', 'boolean'],
	['prfs', 'boolean'],
]);

const cookiesAccepted = writable(areCookiesAccepted);

cookiesAccepted.subscribe(val => {
	if (browser && val != undefined) localStorage.setItem('cookies-accepted', JSON.stringify(val));
});

function set(val: Cookies) {
	if (typeof val.prfs === 'boolean' && typeof val.auth === 'boolean') cookiesAccepted.set(val);
	else console.error('val no contains "prfs" and "auth" properties >:C');
}

export default {
	subscribe: cookiesAccepted.subscribe,
	set,
};
