import { Alert } from '../types/alert';

import { writable } from 'svelte/store';

import { browser } from '$app/env';

const cookiesAccepted = browser && localStorage.getItem('cookies-accepted');

const alert = writable<Alert>(cookiesAccepted ? Alert.none : Alert.cookies);

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

export default {
	subscribe: alert.subscribe,
	set_none,
	set_cookies,
	set_inalidPhoto,
	set_noSession,
};
