import type { Writable } from 'svelte/store';

export enum Cookies {
	authenticate = 'auth',
	preferences = 'prfs',
}

export enum Panel {
	none = 'none',
	opts = 'opts',
	more = 'more',
	add = 'add',
	prof = 'prof',
}

export enum Photo {
	camera = 'camera',
	file = 'file',
}

export type SessionStore = Writable<App.Session>;

export type TimeoutID = ReturnType<typeof setTimeout>;
