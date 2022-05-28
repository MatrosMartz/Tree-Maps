import { StateValidable } from '../../types/database/enums';

import { allTreeKeys, treeKeysTypes, treeRequiredKeys } from './interfaces';

export function requiredKeysTreeValidate(data: unknown) {
	if (data == null || typeof data !== 'object') throw new Error('data no are object');

	if (Array.isArray(data)) throw new Error('data is Array');

	const keysData = Object.keys(data);

	// tree requiered keys exist in the data
	for (const key of treeRequiredKeys) {
		if (!keysData.includes(key)) throw new Error(`data doesn't have property '${key}' of tree`);
		if (
			(treeKeysTypes[key] === '[number, number]' && (<unknown[]>data[key]).length !== 2) ||
			typeof (<unknown[]>data[key])[0] !== 'number' ||
			typeof (<unknown[]>data[key])[0] !== 'number' ||
			(treeKeysTypes[key] === 'stateValidate' &&
				!Object.values(StateValidable).includes(data[key])) ||
			typeof data[key] !== treeKeysTypes[key]
		)
			throw new Error(`property '${key}' isn't of type '${treeKeysTypes[key]}'`);
	}

	// all data key exist in the tree
	for (const key of keysData)
		if (!allTreeKeys.includes(key))
			throw new Error(`data has the property '${key}' which is not in the tree`);

	return "it's a tree, I have confirmed it";
}
