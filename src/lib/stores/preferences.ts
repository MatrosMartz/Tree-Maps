import type { SessionStore } from '../types';

import { Color, Lang, Theme, type Preferences } from '../types/preferences';

import { browser } from '$app/env';
import { session } from '$app/stores';

import { derived, get } from 'svelte/store';

import { parseString, objectPorperties } from '../utilities';
import { set_config } from '../utilities/preferences';
import cookie from './cookie';

const preferences = derived<SessionStore, Preferences>(session, ($session, set) => {
	const prfsOfSession = parseString<Preferences>($session.prfs);
	const isPreferences = <boolean>objectPorperties(
		prfsOfSession,
		[
			['theme', 'string'],
			['animation', 'boolean'],
			['lang', 'string'],
			['color', 'string'],
		],
		'boolean'
	);
	if (prfsOfSession != null && isPreferences) {
		set(prfsOfSession);
	} else if (browser) {
		const prfs = {
			theme: matchMedia('(prefers-color-scheme: dark)').matches ? Theme.dark : Theme.light,
			animation: !matchMedia('(prefers-reduced-motion)').matches,
			lang: Lang.spanish,
			color: Color.g,
		};
		set(prfs);
	} else {
		set({
			theme: Theme.light,
			animation: true,
			lang: Lang.spanish,
			color: Color.g,
		});
	}
});

function set_theme(t: boolean) {
	if (browser) {
		const newPreferences: Preferences = {
			...get(preferences),
			theme: t ? Theme.dark : Theme.light,
		};
		const newSesstion = { prfs: JSON.stringify(newPreferences) };
		if (get(cookie).prfs) set_config(newPreferences);
		session.update(() => newSesstion);
	}
}
function set_lang(l: boolean) {
	if (browser) {
		const newPreferences: Preferences = {
			...get(preferences),
			lang: l ? Lang.english : Lang.spanish,
		};
		const newSesstion = { prfs: JSON.stringify(newPreferences) };
		if (get(cookie).prfs) set_config(newPreferences);
		session.update(() => newSesstion);
	}
}

function set_animation(animation: boolean) {
	if (browser) {
		const newPreferences: Preferences = { ...get(preferences), animation };
		const newSesstion = { prfs: JSON.stringify(newPreferences) };
		if (get(cookie).prfs) set_config(newPreferences);
		session.update(() => newSesstion);
	}
}
function set_color(color: Color) {
	if (browser) {
		const newPreferences: Preferences = { ...get(preferences), color };
		const newSesstion = { prfs: JSON.stringify(newPreferences) };
		if (get(cookie).prfs) set_config(newPreferences);
		session.update(() => newSesstion);
	}
}

export default {
	subscribe: preferences.subscribe,
	set_theme,
	set_lang,
	set_color,
	set_animation,
};
