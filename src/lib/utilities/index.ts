import type { Types } from '../types';

export function parseString<T = object>(val: string): T | undefined {
	try {
		return <T>JSON.parse(val);
	} catch (err) {
		if (err.name === 'SyntaxError') return;
		console.log(err);
	}
}

export function objectPorperties(
	obj: object | undefined,
	properties: [string, Types][],
	ReturnType: 'self' | 'boolean' = 'self'
): object | undefined | boolean {
	if (obj == null) return;
	for (const property of properties) {
		if (typeof obj[property[0]] !== property[1]) return;
	}
	if (ReturnType === 'boolean') return true;
	return obj;
}
