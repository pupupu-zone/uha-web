import React, { useRef, useId, useState, useEffect } from 'react';

import toast from 'react-hot-toast';
import { useBrokenImg } from '@hooks';
import { useInitials, useGradientId } from './_hooks';

import Cropper from './cropper';
import { Icon, Modal, useModal } from '@ui';
import Root, { ImageWrap, Image, Initials, ImageSelector, Delete } from './avatar.styles';

import type { Props } from './avatar.d';

const Avatar = ({ name, url, onChange, isFetching, withError }: Props) => {
	const id = useId();
	const modal = useModal();

	const initials = useInitials(name);
	const gradientId = useGradientId(name);

	const avatarRef = useRef<HTMLInputElement>(null);
	const [avatarUrl, setAvatarUrl] = useState<string>(url);
	const [avatarPreview, setAvatarPreview] = useState<string>(''); // url from blob only
	const { imageRef, isImageBroken, isImageLoading } = useBrokenImg();

	useEffect(() => {
		setAvatarUrl(url);
	}, [url]);

	useEffect(() => {
		if (!onChange) return;

		onChange(avatarUrl);
	}, [avatarUrl]);

	const clearImageBlob = () => {
		setAvatarUrl('');
		setAvatarPreview('');

		if (avatarRef.current) {
			avatarRef.current.value = '';
		}

		if (onChange) onChange();
	};

	const loadImageHd = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files || [];
		const file = files[0];
		if (!file) return;

		if (!file.type.startsWith('image/')) {
			toast.error(`File type is not supported (${file.type})`);

			return;
		}

		setAvatarPreview(URL.createObjectURL(file));
		modal.openModal();
	};

	const openImageDialog = () => {
		avatarRef.current?.click();
	};

	return (
		<Root>
			<ImageSelector ref={avatarRef} id={id} type="file" hidden onChange={loadImageHd} />

			<Modal title="Crop image" {...modal}>
				<Cropper avatarPreview={avatarPreview} setAvatarUrl={setAvatarUrl} closeModal={modal.closeModal} />
			</Modal>

			<ImageWrap $gradientId={gradientId} onPress={openImageDialog}>
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
