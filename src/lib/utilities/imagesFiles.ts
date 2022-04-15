import alertStore from '../stores/alert';

const allowedImageTypes = ['image/png', 'image/gif', 'image/jpeg', 'image/webp'];

export function filterImages(files: File[]) {
	const allowedFiles: File[] = [];
	const notAllowedFileTypes: string[] = [];

	for (const f of files) {
		if (allowedImageTypes.includes(f.type)) allowedFiles.push(f);
		else if (!notAllowedFileTypes.includes(f.type)) notAllowedFileTypes.push(f.type);
	}
	console.log(notAllowedFileTypes);

	if (notAllowedFileTypes.length > 0) {
		alertStore.set_invalidPhoto(
			notAllowedFileTypes.map((v): [string, string] => {
				return [v.match(/^\w*(?=\/)/)?.[0], v.match(/[A-z+]*$/)?.[0]];
			})
		);
	}

	return allowedFiles;
}
