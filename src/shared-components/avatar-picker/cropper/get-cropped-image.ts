import type { Area } from 'react-easy-crop';

// thx to https://www.npmjs.com/package/react-easy-crop?activeTab=readme

const createImage = (url: string) => {
	const promise = new Promise<HTMLImageElement>((resolve, reject) => {
		const image = new Image();

		image.addEventListener('load', () => resolve(image));
		image.addEventListener('error', (error) => reject(error));

		image.src = url;
	});

	return promise;
};

const getRadianAngle = (degreeValue: number) => (degreeValue * Math.PI) / 180;

/**
 * Returns the new bounding area of a rotated rectangle.
 */
const rotateSize = (width: number, height: number, rotationDegree: number) => {
	const rotRad = getRadianAngle(rotationDegree);

	return {
		width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
		height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height)
	};
};

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */
export const getCroppedImg = async (imageSrc: string, pixelCrop: Area, rotation = 0) => {
	const image = await createImage(imageSrc);
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	if (!ctx) {
		return null;
	}

	const rotRad = getRadianAngle(rotation);

	// calculate bounding box of the rotated image
	const { width: bBoxWidth, height: bBoxHeight } = rotateSize(image.width, image.height, rotation);

	// set canvas size to match the bounding box
	canvas.width = bBoxWidth;
	canvas.height = bBoxHeight;

	// translate canvas context to a central location to allow rotating and flipping around the center
	ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
	ctx.rotate(rotRad);
	ctx.scale(1, 1);
	ctx.translate(image.width / -2, image.height / -2);

	// draw rotated image
	ctx.drawImage(image, 0, 0);

	const croppedCanvas = document.createElement('canvas');

	const croppedCtx = croppedCanvas.getContext('2d');

	if (!croppedCtx) {
		return null;
	}

	// Set the size of the cropped canvas
	croppedCanvas.width = pixelCrop.width;
	croppedCanvas.height = pixelCrop.height;

	// Draw the cropped image onto the new canvas
	croppedCtx.drawImage(
		canvas,
		pixelCrop.x,
		pixelCrop.y,
		pixelCrop.width,
		pixelCrop.height,
		0,
		0,
		pixelCrop.width,
		pixelCrop.height
	);

	const promise = new Promise((resolve, reject) => {
		croppedCanvas.toBlob((file) => {
			if (!file) {
				return reject(new Error('No file has been found'));
			}

			const blob = URL.createObjectURL(file);

			resolve(blob);
		}, 'image/webp');
	});

	return promise;
};

export const getRotatedImage = async (imageSrc: string, rotation = 0) => {
	const image = await createImage(imageSrc);
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');

	if (!ctx) {
		return null;
	}

	const orientationChanged = rotation === 90 || rotation === -90 || rotation === 270 || rotation === -270;
	if (orientationChanged) {
		canvas.width = image.height;
		canvas.height = image.width;
	} else {
		canvas.width = image.width;
		canvas.height = image.height;
	}

	ctx.translate(canvas.width / 2, canvas.height / 2);
	ctx.rotate((rotation * Math.PI) / 180);
	ctx.drawImage(image, -image.width / 2, -image.height / 2);

	const promise = new Promise((resolve, reject) => {
		canvas.toBlob((file) => {
			if (!file) {
				return reject(new Error('No file has been found'));
			}

			const blob = URL.createObjectURL(file);

			resolve(blob);
		}, 'image/webp');
	});

	return promise;
};
