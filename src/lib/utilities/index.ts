export function parseString<T>(val: string): T | undefined {
	try {
		return <T>JSON.parse(val);
	} catch (err) {
		if (err.name === 'SyntaxError') return;
		console.log(err);
	}
}
