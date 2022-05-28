import { user } from '$lib/stores/auth';

import { get } from 'svelte/store';

import { StateValidable } from '$lib/types/database/enums';

import type { Tree } from '$lib/types/database/models';

export type FormDataWithentries = FormData & { entries(): IterableIterator<[string, string]> };

export function postJSONData(uri: string, data: FormDataWithentries) {
	const obj: Tree = {
		specie: '',
		location: [null, null],
		state: StateValidable.IN,
		userRecorder: get(user).email,
	};

	for (const [key, value] of data.entries()) {
		if (key === 'species') obj.specie = value;
		else if (key === 'lat') obj.location[0] = +value;
		else if (key === 'lng') obj.location[1] = +value;
	}

	fetch(uri, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(obj),
	});
}
