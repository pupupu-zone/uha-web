import React from 'react';

import { useAddApp } from './_hooks';

import Root from './add-app.styles';
import AppSharedView from '@pages/entities/apps/shared-view';

const AddApp = () => {
	const { form } = useAddApp();
	return (
		<Root>
			<AppSharedView form={form} />
		</Root>
	);
};

export default AddApp;
