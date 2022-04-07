import { Alert } from '../types';

import { writable } from 'svelte/store';
import { browser } from '$app/env';

const areCookiesAccepted = browser && localStorage.getItem('cookies-accepted') === 'true';

const cookiesAccepted = writable(areCookiesAccepted);

const alert = writable(areCookiesAccepted ? Alert.none : Alert.cookies);

function set_none() {
	alert.set(Alert.none);
}
function set_cookies() {
	alert.set(Alert.cookies);
}
function set_inalidPhoto() {
	alert.set(Alert.inalidPhoto);
}
function set_noSession() {
	alert.set(Alert.noSession);
}

cookiesAccepted.subscribe(val => {
	if (browser) localStorage.setItem('cookies-accepted', val + '');
	if (val) set_cookies();
});

export default {
	subscribe: alert.subscribe,
	set_none,
	set_cookies,
	set_inalidPhoto,
	set_noSession,
};
