type types = 'string' | '[number, number]' | 'number' | 'stateValidate';

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
	userRecorder: 'string',
	state: 'string',
	location: '[number, number]',
	specie: 'string',
	_id: 'string',
	userValidate: 'string',
	age: 'number',
	width: 'number',
	diameter: 'number',
	name: 'string',
	description: 'string',
};
