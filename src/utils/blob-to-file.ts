import mime from 'mime-types';

const isBlobString = (str: string) => {
	try {
		return str.startsWith('blob:') && new URL(str).protocol === 'blob:';
	} catch {
		return false;
	}
};

const blobUrlToFile = async (blobUrl: string, fileName = 'image') => {
	if (!isBlobString(blobUrl)) return;

	const response = await fetch(blobUrl);
	const blob = await response.blob();
	const extension = mime.extension(blob.type);

	return new File([blob], `${fileName}.${extension}`, { type: blob.type });
};

export default blobUrlToFile;
