import React, { useMemo, useRef, useId, useState, useEffect } from 'react';

import toast from 'react-hot-toast';
import { useBrokenImg } from '@hooks';
import { getCroppedImg } from './get-cropped-image';
import { useInitials, useGradientId } from './_hooks';

import Cropper from 'react-easy-crop';
import { Icon, Button, Modal, useModal } from '@ui';
import Root, {
	ImageWrap,
	Image,
	Initials,
	ImageSelector,
	Delete,
	CropRoot,
	CropperWrap,
	Actions
} from './avatar.styles';

import type { Props } from './avatar.d';

const Avatar = ({ name, url, onChange, isFetching, withError }: Props) => {
	const [crop, setCrop] = useState({ x: 0, y: 0 });
	const [zoom, setZoom] = useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
	const modal = useModal();

	const [realAvatarUrl, setRealAvatarUrl] = useState<string>(url);

	useEffect(() => {
		setRealAvatarUrl(url);
	}, [url]);

	const id = useId();

	const avatarRef = useRef<HTMLInputElement>(null);

	const initials = useInitials(name);
	const gradientId = useGradientId(name);
	const { imageRef, isImageBroken, isImageLoading } = useBrokenImg();

	const clearImageBlob = () => {
		setRealAvatarUrl('');

		if (avatarRef.current) {
			avatarRef.current.value = '';
		}

		if (onChange) onChange();
	};

	const onCropComplete = (_, value) => {
		setCroppedAreaPixels(value);
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

					if (!file.type.startsWith('image/')) {
						toast.error(`File type is not supported (${file.type})`);

						return;
					}

					setRealAvatarUrl(URL.createObjectURL(file));
					if (onChange) onChange(file);
					modal.openModal();
				}}
			/>

			<Modal title="Crop image" {...modal}>
				<CropRoot>
					<CropperWrap>
						<Cropper
							image={realAvatarUrl}
							crop={crop}
							zoom={zoom}
							aspect={1 / 1}
							onCropChange={setCrop}
							onZoomChange={setZoom}
							onCropComplete={onCropComplete}
							onMediaLoaded={() => {
								setCrop({ x: 0, y: 0 });
								setZoom(1);
							}}
						/>
					</CropperWrap>

					<Actions>
						<Button isFullWidth isSecondary onPress={modal.closeModal}>
							Cancel
						</Button>

						<Button
							isFullWidth
							onPress={async () => {
								const imageBlobUrl = await getCroppedImg(realAvatarUrl, croppedAreaPixels);

								setRealAvatarUrl(imageBlobUrl);

								modal.closeModal();
							}}
						>
							Save
						</Button>
					</Actions>
				</CropRoot>
			</Modal>

			<ImageWrap
				$gradientId={gradientId}
				onPress={() => {
					avatarRef.current?.click();
				}}
			>
				{realAvatarUrl && !isImageBroken && <Image ref={imageRef} src={realAvatarUrl} alt={name} />}
				{(!realAvatarUrl || isImageLoading) && <Initials>{initials}</Initials>}
			</ImageWrap>

			{realAvatarUrl && (
				<Delete onPress={clearImageBlob}>
					<Icon name="close" width={36} height={36} />
				</Delete>
			)}
		</Root>
	);
};

export default Avatar;
