import type { CustomFilter } from '../types/database';

import type { Specie } from '../types/database/models';

import db from './conection';

export const speciesScientificNames: string[] = [];

const collectionName = 'species';

export async function getSpecieScientificName() {
	if (!speciesScientificNames.length) {
		const collection = (await db()).collection<Specie>(collectionName);

		const newSpeciesNames = (
			await collection.find(undefined, { projection: { scientificName: 1 } }).toArray()
		).map(({ scientificName }) => scientificName);

		speciesScientificNames.push(...newSpeciesNames);
	}
}

export async function getManySpecies(filter?: CustomFilter<Specie>) {
	const collection = (await db()).collection<Specie>(collectionName);

	return await collection.find(filter, { projection: { _id: 0 } }).toArray();
}

export async function getOneSpecies(filter?: CustomFilter<Specie>) {
	const collection = (await db()).collection<Specie>(collectionName);

	return await collection.findOne(filter, { projection: { _id: 0 } });
}
