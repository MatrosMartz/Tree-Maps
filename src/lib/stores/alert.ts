import { AlertEnum } from '../types/alert';

import { writable } from 'svelte/store';

import { browser } from '$app/env';

const cookiesAccepted = browser && localStorage.getItem('cookies-accepted');

const alert = writable<AlertEnum>(cookiesAccepted ? AlertEnum.none : AlertEnum.cookies);

function set_none() {
	alert.set(AlertEnum.none);
}

function set_cookies() {
	alert.set(AlertEnum.cookies);
}

function set_inalidPhoto() {
	alert.set(AlertEnum.inalidPhoto);
}

function set_noSession() {
	alert.set(AlertEnum.noSession);
}

export default {
	subscribe: alert.subscribe,
	set_none,
	set_cookies,
	set_inalidPhoto,
	set_noSession,
};
