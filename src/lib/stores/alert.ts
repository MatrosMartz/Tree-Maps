import { Alert } from '../types/alert';

import { writable } from 'svelte/store';

const alert = writable(Alert.cookies);

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
