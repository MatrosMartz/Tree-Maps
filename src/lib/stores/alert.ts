import { AlertEnum } from '../types/alert';

import { writable } from 'svelte/store';

import { browser } from '$app/env';

const cookiesAccepted = browser && localStorage.getItem('cookies-accepted');

const alert = writable<AlertEnum>(cookiesAccepted ? AlertEnum.none : AlertEnum.cookies);
export const invalidTypes = writable<[string, string][]>();

function set_none() {
	alert.set(AlertEnum.none);
}

function set_cookies() {
	alert.set(AlertEnum.cookies);
}

function set_invalidPhoto(invalid: [string, string][]) {
	invalidTypes.set(invalid);
	alert.set(AlertEnum.invalidPhoto);
}

function set_noSession() {
	alert.set(AlertEnum.noSession);
}

export default {
	subscribe: alert.subscribe,
	set_none,
	set_cookies,
	set_invalidPhoto,
	set_noSession,
};
