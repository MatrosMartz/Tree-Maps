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
	properties: [string, string][]
): object | undefined {
	if (obj == null) return;
	for (const property of properties) {
		if (typeof obj[property[0]] !== property[1]) return;
	}
	return obj;
}
