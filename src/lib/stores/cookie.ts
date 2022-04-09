import type { Cookies } from '../types/alert';

import { writable } from 'svelte/store';
import { browser } from '$app/env';

import { parseString } from '../utilities';

import alert from './alert';

const areCookiesAccepted =
	(browser && parseString<Cookies>(localStorage.getItem('cookies-accepted'))) ??
	<Cookies>{ auth: false, prfs: false };

const cookiesAccepted = writable(areCookiesAccepted);

cookiesAccepted.subscribe(val => {
	if (browser) localStorage.setItem('cookies-accepted', JSON.stringify(val));
	if (val.auth || val.prfs) alert.set_cookies();
});
