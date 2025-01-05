import React from 'react';

import { useAddSub } from './_hooks';
import SubSharedView from '@pages/entities/subscriptions/shared-view';

const AddSub = () => {
	const { form } = useAddSub();

	return <SubSharedView form={form} />;
};

export default AddSub;
