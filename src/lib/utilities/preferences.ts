import type { TimeoutID } from '../types';
import type { Preferences } from '../types/preferences';

let timeoutID: TimeoutID;
const timeOfTimeout = 0;

export function isPreferences(val: unknown) {
	return (
		typeof val === 'object' &&
		['drakmode', 'lightmode'].includes((<Preferences>val).theme) &&
		[true, false].includes((<Preferences>val).animation) &&
		['en', 'es'].includes((<Preferences>val).lang) &&
		['green', 'orange', 'red', 'blue'].includes((<Preferences>val).color)
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
