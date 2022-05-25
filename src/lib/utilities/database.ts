const treeRequiredKeys = ['userRecorder', 'state', 'location', 'specie'];

const allTreeKeys = [
	...treeRequiredKeys,
	'_id',
	'userValidate',
	'age',
	'width',
	'diameter',
	'name',
	'description',
];

export function requiredKeysTreeValidate(data: unknown) {
	if (data == null || typeof data !== 'object') return new Error('data no are object');

	if (Array.isArray(data)) return new Error('data is Array');

	const keysData = Object.keys(data);

	// data keys are less than tree required or more than the tree all
	if (keysData.length < treeRequiredKeys.length || keysData.length > allTreeKeys.length)
		return new Error('data not are tree');

	// tree requiered keys exist in the data
	for (const key of treeRequiredKeys)
		if (!keysData.includes(key)) return new Error('data not are tree');

	// all data key exist in the tree
	for (const key of keysData)
		if (!allTreeKeys.includes(key)) return new Error('data not are tree');

	return "it's a tree, I have confirmed it";
}
