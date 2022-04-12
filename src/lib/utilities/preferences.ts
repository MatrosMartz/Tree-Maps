import type { TimeoutID } from '../types';
import type { Preferences } from '../types/preferences';

let timeoutID: TimeoutID;
const timeOfTimeout = 0;

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
