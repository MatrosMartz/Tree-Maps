import { StateValidable } from '../../types/database/enums';

import { speciesScientificNames } from '../../database/species';

import { allTreeKeys, treeKeysTypes, treeRequiredKeys } from './interfaces';

const emalRegex =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

function validateLocation(rc: unknown[]) {
	return (
		!Array.isArray(rc) ||
		rc.length !== 2 ||
		typeof rc[0] !== 'number' ||
		typeof rc[1] !== 'number'
	);
}

export function requiredKeysTreeValidate(data: unknown) {
	if (data == null || typeof data !== 'object') throw new Error('data no are object');

	if (Array.isArray(data)) throw new Error('data is Array');

	const keysData = Object.keys(data);

	// tree requiered keys exist in the data
	for (const key of treeRequiredKeys) {
		if (!keysData.includes(key))
			throw new Error(`data doesn't have property '${key}' of the 'tree required keys'`);

		const keyType = treeKeysTypes[key];
		const keyData = data[key];

		//validate email
		if (keyType === 'email') {
			if (!emalRegex.test(keyData)) throw new Error(`property '${key}' isn't '${keyType}'`);
		}
		// validate location
		else if (keyType === 'location') {
			if (validateLocation(keyData))
				throw new Error(`property '${key}' isn't '[number, number]'`);
		}
		// validate state
		else if (keyType === 'stateValidate') {
			console.log(StateValidable);
			if (!Object.values(StateValidable).includes(keyData))
				throw new Error(`property '${key}' isn't '${keyType}'`);
		}
		// validate specie
		else if (keyType === 'specie') {
			if (!speciesScientificNames.includes(keyData))
				throw new Error(`property '${key}' isn't '${keyType}'`);
		}
		// validate normal data
		else if (typeof keyData !== keyType)
			throw new Error(`property '${key}' isn't '${keyType}'`);
	}

	// all data key exist in the tree
	for (const key of keysData)
		if (!allTreeKeys.includes(key))
			throw new Error(
				`data has the property '${key}' which is not in the 'tree required keys'`
			);

	return "it's a tree, I have confirmed it";
}
