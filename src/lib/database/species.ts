import type { FilterSpecie } from '../types/database';

import type { Specie } from '../types/database/models';

import db from './conection';

export const speciesScientificNames: string[] = [];

export async function getSpecieScientificName() {
	if (!speciesScientificNames.length) {
		const collection = (await db()).collection('species');

		const newSpeciesNames = (<Specie[]>(
			await collection.find(undefined, { projection: { scientificName: 1 } }).toArray()
		)).map(({ scientificName }) => scientificName);

		speciesScientificNames.push(...newSpeciesNames);
	}
}

export async function getManySpecies(filter?: FilterSpecie) {
	const collection = (await db()).collection('species');

	return <Specie[]>await collection.find(filter, { projection: { _id: 0 } }).toArray();
}

export async function getOneSpecies(filter?: FilterSpecie) {
	const collection = (await db()).collection('species');

	return <Specie>await collection.findOne(filter, { projection: { _id: 0 } });
}
