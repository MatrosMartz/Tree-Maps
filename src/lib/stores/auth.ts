import type { Writable } from 'svelte/store';

import type { Auth0Client, User } from '@auth0/auth0-spa-js';

import config from '../auth/config';

import { writable, get } from 'svelte/store';

import auth0 from '@auth0/auth0-spa-js';

const client: Writable<Auth0Client> = writable(null);
export const user: Writable<User> = writable({});
export const isAuth: Writable<boolean> = writable(false);
export const popupOpen: Writable<boolean> = writable(false);

export async function createClient() {
	try {
		client.set(await auth0(config));
		user.set(await get(client).getUser());
		isAuth.set(await get(client).isAuthenticated());
	} catch (err) {
		console.error(err);
	}
}

export function login() {
	return async () => {
		popupOpen.set(true);
		try {
			await get(client).loginWithPopup();
			user.set(await get(client).getUser());
			isAuth.set(true);
		} catch (err) {
			console.error(err);
		} finally {
			popupOpen.set(false);
		}
	};
}
export function logout() {
	return () => {
		return get(client).logout();
	};
}
