import type { CustomFilter } from '../types/database';
import type { Tree } from '../types/database/models';

import db from './conection';

export const treeIds: string[] = [];

const collectionName = 'trees';

export async function getManyTrees(filter?: CustomFilter<Tree>) {
	const collection = (await db()).collection<Tree>(collectionName);

	return await collection.find(filter, { projection: { _id: 0 } }).toArray();
}

export async function getOneSTrees(filter?: CustomFilter<Tree>) {
	const collection = (await db()).collection<Tree>(collectionName);

	return await collection.findOne(filter, { projection: { _id: 0 } });
}

export async function postTree(tree: Tree) {
	const collection = (await db()).collection<Tree>(collectionName);

	await collection.insertOne(tree);
}
