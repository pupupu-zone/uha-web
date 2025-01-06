import React, { useRef, useId, useState, useEffect } from 'react';

import toast from 'react-hot-toast';
import { useBrokenImg, useInitials, useGradientId } from '@hooks';

import Cropper from './cropper';
import { Icon, Modal, useModal } from '@ui';
import Root, { ImageWrap, Image, Initials, ImageSelector, Delete, Loader } from './avatar-picker.styles';

import type { Props } from './avatar-picker.d';

// @TODO: add support of FileTrigger from 'react-aria-components';

const Avatar = ({ isReadOnly, name, url, onChange, isFetching, withError, withDelete = true }: Props) => {
	const id = useId();
	const modal = useModal();

	const initials = useInitials(name);
	const gradientId = useGradientId(name);

	const avatarRef = useRef<HTMLInputElement>(null);
	const [avatarUrl, setAvatarUrl] = useState<string>(url);
	const [avatarPreview, setAvatarPreview] = useState<string>(''); // url from blob only
	const { imageRef, isImageLoading } = useBrokenImg();

	useEffect(() => {
		setAvatarUrl(url);
	}, [url]);

	const clearImageBlob = () => {
		if (isReadOnly) return;

		setAvatarUrl('');
		setAvatarPreview('');

		if (avatarRef.current) {
			avatarRef.current.value = '';
		}

		if (onChange) onChange();
	};

	const loadImageHd = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (isReadOnly) return;

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
		if (isReadOnly) return;

		avatarRef.current?.click();
	};

	return (
		<Root>
			<ImageSelector ref={avatarRef} id={id} type="file" hidden onChange={loadImageHd} />

			<Modal title="Crop image" {...modal}>
				<Cropper
					avatarPreview={avatarPreview}
					setAvatarUrl={(url: string) => {
						setAvatarUrl(url);

						if (onChange) onChange(url);
					}}
					closeModal={modal.closeModal}
				/>
			</Modal>

			<ImageWrap $gradientId={gradientId} onPress={openImageDialog}>
				{avatarUrl && <Image ref={imageRef} src={avatarUrl} alt={name} />}
				{(!avatarUrl || (avatarUrl && isImageLoading)) && <Initials>{initials}</Initials>}

				<Loader $isFetching={Boolean(isFetching)}>
					<Icon name="infinity" width={36} height={36} />
				</Loader>
			</ImageWrap>

			{avatarUrl && withDelete && !isReadOnly && (
				<Delete onPress={clearImageBlob}>
					<Icon name="close" width={36} height={36} />
				</Delete>
			)}
		</Root>
	);
};

export default Avatar;
