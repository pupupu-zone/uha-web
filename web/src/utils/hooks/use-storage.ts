import { useEffect, useState } from 'react';
import { formatBytes } from '@utils';

type StorageEstimate = {
	usage: string;
	quota: string;
};

type StorageHookReturn = [StorageEstimate, boolean];

const useStorage = (): StorageHookReturn => {
	const [storage, setStorage] = useState<StorageEstimate>({
		usage: '0',
		quota: '0'
	});

	useEffect(() => {
		if (!('storage' in navigator)) return;

		const promise = navigator.storage.estimate();

		promise.then(({ usage, quota }) => {
			setStorage({
				usage: formatBytes(usage ?? 0),
				quota: formatBytes(quota ?? 0)
			});
		});
	}, []);

	return [storage, 'storage' in navigator];
};

export default useStorage;
