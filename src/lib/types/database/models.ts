import type { ObjectId } from 'mongodb';

import type { ConservationCodes, Poblationtype, StateValidable } from './enums';

export type StatePoblation = [string, Poblationtype];

export interface Specie {
	_id: ObjectId;
	cientificName: string;
	name: string;
	state: StateValidable;
	conservation: ConservationCodes;
	gener: string;
	subgener?: string;
	description: string;
	distribution: StatePoblation[];
}
