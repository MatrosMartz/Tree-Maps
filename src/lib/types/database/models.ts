import type { ObjectId } from 'mongodb';

import type { ConservationCodes, Poblationtype, StateValidable } from './enums';

export type StatePoblation = [string, Poblationtype];

export interface Specie {
	_id: ObjectId;
	scientificName: string;
	name: string;
	state: StateValidable;
	conservation: ConservationCodes;
	gener: string;
	subgener?: string;
	description?: string;
	distribution: StatePoblation[];
}

export interface Tree {
	userRecorder: string;
	userValidate?: string;
	state: StateValidable;
	age?: number;
	width?: number;
	diameter?: number;
	name?: string;
	location: [number, number];
	specie: string;
	description?: string;
}

export interface TreeWhitId extends Tree {
	_id: ObjectId;
}
