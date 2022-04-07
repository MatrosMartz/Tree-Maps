import type { Writable } from 'svelte/store';

export enum Alert {
	none = 'none',
	cookies = 'cookies',
	noSession = 'no session',
	inalidPhoto = 'invalid photo',
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

export interface SessionInterface {
	prfs?: string;
}

export type SessionStore = Writable<SessionInterface>;

export type TimeoutID = ReturnType<typeof setTimeout>;
