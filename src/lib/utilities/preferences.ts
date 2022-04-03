import type { TimeoutID } from '../types';
import type { Preferences } from '../types/preferences';

let timeoutID: TimeoutID;
const timeOfTimeout = 500;

export function parsePreferences(val: string) {
	try {
		return JSON.parse(val);
	} catch (err) {
		if (err.name === 'SyntaxError') return undefined;
		console.log(err);
	}
}

export function isPreferences(val: Record<string, string | boolean>) {
	return (
		val != null &&
		val.theme != null &&
		val.animation != null &&
		val.lang != null &&
		val.color != null
	);
}

export function set_config(prfs: Preferences) {
	if (timeoutID) clearTimeout(timeoutID);
	timeoutID = setTimeout(async () => {
		await fetch('preferences', {
			method: 'PUT',
			headers: {
				'set-cookie': JSON.stringify(prfs),
			},
		});
	}, timeOfTimeout);
}
