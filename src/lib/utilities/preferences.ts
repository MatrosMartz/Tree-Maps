import type { TimeoutID } from '../types';
import type { Preferences } from '../types/preferences';

let timeoutID: TimeoutID;
const timeOfTimeout = 0;

export function parsePreferences(val: string) {
	try {
		return JSON.parse(val);
	} catch (err) {
		if (err.name === 'SyntaxError') return undefined;
		console.log(err);
	}
}

export function isPreferences(val: unknown) {
	return (
		typeof val === 'object' &&
		['drakmode', 'lightmode'].includes(val.theme) &&
		[true, false].includes(val.animation) &&
		['en', 'es'].includes(val.lang) &&
		['green', 'orange', 'red', 'blue'].includes(val.color)
	);
}

export function set_config(prfs: Preferences) {
	if (timeoutID) clearTimeout(timeoutID);
	timeoutID = setTimeout(async () => {
		const res = await fetch('/preferences', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(prfs),
		});
		console.log(await res.json());
	}, timeOfTimeout);
}
