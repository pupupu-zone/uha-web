import React, { useState } from 'react';

import { getCroppedImg, getRotatedImage } from './get-cropped-image';

import { Icon, Button } from '@ui';
import EasyCrop from 'react-easy-crop';
import Root, { CropperWrap, Actions, Rotations, RotateBtn } from './cropper.styles';

import type { Props } from './cropper.d';
import type { Area } from 'react-easy-crop';

const Cropper = ({ avatarPreview, setAvatarUrl, closeModal }: Props) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [rotation, setRotation] = useState(0);
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const onCropComplete = (_: unknown, value: Area) => {
		setCroppedAreaPixels(value);
	};

	const resetCropper = () => {
		setCrop({ x: 0, y: 0 });
		setRotation(0);
		setZoom(1);
	};

	const rotateLeft = () => {
		setRotation((prev) => (prev + 270) % 360);
	};

	const rotateRight = () => {
		setRotation((prev) => (prev + 90) % 360);
	};

	const saveImage = async () => {
		setIsLoading(true);
		const rotatedImage = await getRotatedImage(avatarPreview, rotation);
		const imageBlobUrl = await getCroppedImg(rotatedImage, croppedAreaPixels);

		setAvatarUrl(imageBlobUrl as string);
		setIsLoading(false);

		closeModal();
	};

	return (
		<Root>
			<CropperWrap>
				<EasyCrop
					objectFit="cover"
					image={avatarPreview}
					crop={crop}
					zoom={zoom}
					rotation={rotation}
					aspect={1 / 1}
					onCropChange={setCrop}
					onZoomChange={setZoom}
					onCropComplete={onCropComplete}
					onMediaLoaded={resetCropper}
				/>
			</CropperWrap>

			<Rotations>
				<RotateBtn onPress={rotateLeft}>
					<Icon name="rotate-left" width={28} height={28} />
				</RotateBtn>

				<RotateBtn onPress={rotateRight}>
					<Icon name="rotate-right" width={28} height={28} />
				</RotateBtn>
			</Rotations>

			<Actions>
				<Button isFullWidth isSecondary onPress={closeModal}>
					Cancel
				</Button>

				<Button isFullWidth isDisabled={isLoading} onPress={saveImage}>
					Save
				</Button>
			</Actions>
		</Root>
	);
};

export default Cropper;
