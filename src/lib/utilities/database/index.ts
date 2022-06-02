import { StateValidable } from '../../types/database/enums';

import { allTreeKeys, treeKeysTypes, treeRequiredKeys } from './interfaces';

const emalRegex =
	/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

function validateLocation(rc: unknown[]) {
	return rc.length !== 2 || typeof rc[0] !== 'number' || typeof rc[1] !== 'number';
}

export function requiredKeysTreeValidate(data: unknown) {
	if (data == null || typeof data !== 'object') throw new Error('data no are object');

	if (Array.isArray(data)) throw new Error('data is Array');

	const keysData = Object.keys(data);

	// tree requiered keys exist in the data
	for (const key of treeRequiredKeys) {
		if (!keysData.includes(key)) throw new Error(`data doesn't have property '${key}' of tree`);

		//validate email
		if (treeKeysTypes[key] === 'email') {
			if (!emalRegex.test(data[key]))
				throw new Error(`property '${key}' isn't '${treeKeysTypes[key]}'`);
		}
		// validate location
		else if (treeKeysTypes[key] === 'location' && Array.isArray(data[key])) {
			if (validateLocation(data[key]))
				throw new Error(`property '${key}' isn't '${treeKeysTypes[key]}'`);
		} else if (treeKeysTypes[key] === 'stateValidate') {
			if (!Object.values(StateValidable).includes(data[key]))
				throw new Error(`property '${key}' isn't '${treeKeysTypes[key]}'`);
		} else if (typeof data[key] !== treeKeysTypes[key])
			throw new Error(`property '${key}' isn't '${treeKeysTypes[key]}'`);
	}

	// all data key exist in the tree
	for (const key of keysData)
		if (!allTreeKeys.includes(key))
			throw new Error(`data has the property '${key}' which is not in the tree`);

	return "it's a tree, I have confirmed it";
}
