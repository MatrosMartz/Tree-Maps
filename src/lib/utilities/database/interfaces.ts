type types = 'string' | 'location' | 'number' | 'stateValidate' | 'email';

export const treeRequiredKeys = ['userRecorder', 'state', 'location', 'specie'];

export const allTreeKeys = [
	...treeRequiredKeys,
	'_id',
	'userValidate',
	'age',
	'width',
	'diameter',
	'name',
	'description',
];

export const treeKeysTypes: Record<string, types> = {
	userRecorder: 'email',
	state: 'string',
	location: 'location',
	specie: 'string',
	_id: 'string',
	userValidate: 'string',
	age: 'number',
	width: 'number',
	diameter: 'number',
	name: 'string',
	description: 'string',
};
