import React, { useMemo, useRef, useId, useState } from 'react';

import toast from 'react-hot-toast';
import { formatBytes } from '@utils';
import { useBrokenImg } from '@hooks';
import { useInitials, useGradientId } from './_hooks';

import Cropper from 'react-easy-crop';
import { Icon, Button, Modal, useModal } from '@ui';
import Root, { ImageWrap, Image, Initials, ImageSelector, Delete, CropperWrap } from './avatar.styles';

import type { Props } from './avatar.d';

const MAX_SIZE = 1024 * 1024 * 5; // 5MB
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/jfif', 'image/png'];

const Avatar = ({ name, url, onChange, isFetching, withError }: Props) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const modal = useModal();

	const id = useId();
	const [imageBlob, setImageBlob] = useState<File>();
	const avatarRef = useRef<HTMLInputElement>(null);

	const initials = useInitials(name);
	const gradientId = useGradientId(name);
	const { imageRef, isImageBroken, isImageLoading } = useBrokenImg();

	const avatarUrl = useMemo(() => {
		if (imageBlob) {
			return URL.createObjectURL(imageBlob);
		}

		return url;
	}, [url, imageBlob]);

	const clearImageBlob = () => {
		setImageBlob(undefined);

		if (avatarRef.current) {
			avatarRef.current.value = '';
		}

		if (onChange) onChange();
	};

	const onCropComplete = (croppedArea, croppedAreaPixels) => {
		console.log(croppedArea, croppedAreaPixels);
	};

	return (
		<Root>
			<ImageSelector
				ref={avatarRef}
				id={id}
				type="file"
				hidden
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					const files = e.target.files || [];
					const file = files[0];
					if (!file) return;

					if (!SUPPORTED_FORMATS.includes(file.type)) {
						toast.error(`File type is not supported (${file.type})`);

						return;
					}

					if (file.size > MAX_SIZE) {
						toast.error(`File is too large (Max: 5MiB): ${formatBytes(file.size)}`);

						return;
					}

					setImageBlob(file);
					if (onChange) onChange(file);
					modal.openModal();
				}}
			/>

			<Modal {...modal}>
				<>
					<CropperWrap>
						<Cropper
							image={avatarUrl}
							crop={crop}
							zoom={zoom}
							aspect={1 / 1}
							onCropChange={setCrop}
							onZoomChange={setZoom}
							onCropComplete={onCropComplete}
						/>
					</CropperWrap>

					<Button onPress={modal.closeModal}>Save</Button>
				</>
			</Modal>

			<ImageWrap
				$gradientId={gradientId}
				onPress={() => {
					avatarRef.current?.click();
				}}
			>
				{avatarUrl && !isImageBroken && <Image ref={imageRef} src={avatarUrl} alt={name} />}
				{(!avatarUrl || isImageLoading) && <Initials>{initials}</Initials>}
			</ImageWrap>

			{avatarUrl && (
				<Delete onPress={clearImageBlob}>
					<Icon name="close" width={36} height={36} />
				</Delete>
			)}
		</Root>
	);
};

export default Avatar;
