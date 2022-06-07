type types = 'string' | 'location' | 'number' | 'stateValidate' | 'email' | 'specie';

export const treeRequiredKeys = ['userRecorder', 'location', 'specie'];

export const allTreeKeys = [...treeRequiredKeys, 'age', 'width', 'diameter', 'name', 'description'];

export const treeKeysAndAutoKeys = [...allTreeKeys, '_id', 'state', 'userValidate'];

export const treeKeysTypes: Record<string, types> = {
	userRecorder: 'email',
	state: 'string',
	location: 'location',
	specie: 'specie',
	_id: 'string',
	userValidate: 'string',
	age: 'number',
	width: 'number',
	diameter: 'number',
	name: 'string',
	description: 'string',
};
