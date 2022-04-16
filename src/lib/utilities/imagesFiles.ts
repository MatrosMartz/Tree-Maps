import alertStore from '../stores/alert';

const allowedImageTypes = ['image/png', 'image/gif', 'image/jpeg', 'image/webp'];

export function filterImages(files: File[]) {
	const allowedFiles: File[] = [];
	const notAllowedFileTypes: string[] = [];

	for (const f of files) {
		if (allowedImageTypes.includes(f.type)) allowedFiles.push(f);
		else if (!notAllowedFileTypes.includes(f.type)) notAllowedFileTypes.push(f.type);
	}

	if (notAllowedFileTypes.length > 0) {
		alertStore.set_invalidPhoto(
			notAllowedFileTypes.map((v): [string, string] => {
				const typeFile = v.match(/^\w*(?=\/)/)?.[0];
				const extensionFile = v.match(/[A-z+]*$/)?.[0];
				return [
					typeFile.at(0).toLocaleUpperCase() + typeFile.slice(1),
					extensionFile.toLocaleUpperCase(),
				];
			})
		);
	}

	return allowedFiles;
}
