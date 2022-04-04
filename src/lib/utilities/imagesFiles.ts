const allowedImageTypes = ['image/png', 'image/gif', 'image/jpeg', 'image/webp'];

export function filterImages(files: File[]) {
	const allowedFiles: File[] = [];
	const notAllowedFileTypes = new Set<string>();

	for (const f of files) {
		if (allowedImageTypes.includes(f.type)) allowedFiles.push(f);
		else notAllowedFileTypes.add(f.type);
	}

	return {
		allowedFiles,
		notAllowedFileTypes,
	};
}
